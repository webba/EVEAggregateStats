import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { AuthServiceConfig } from './auth.service.config';
import { Observable } from 'rxjs/Observable';
import {  } from 'rxjs/operators/';
import { Agent } from 'https';
import { isNumber } from 'util';

@Injectable()
export class AuthService {
  private characters: CharacterData[];

  constructor(private _http: HttpClient,
    @Optional() private _authServiceConfig: AuthServiceConfig
  ) {
    this.loadCharacters();
   }

  public configure(__authServiceConfig: AuthServiceConfig) {
    this._authServiceConfig = __authServiceConfig;
  }

  public getLoginUrl(): string {
    const responseType = 'token';
    const state = 'testing';
    return this._authServiceConfig.loginUrl
      + '?response_type=' + encodeURIComponent(responseType)
      + '&redirect_uri=' + encodeURIComponent(this._authServiceConfig.redirectUri)
      + '&client_id=' + encodeURIComponent(this._authServiceConfig.clientId)
      + '&scope=' + encodeURIComponent(this._authServiceConfig.scope)
      + '&state=' + encodeURIComponent(state);
  }

  private getTokenFromUrl(): OAuth2Token {
    let params;
    if (location.search.indexOf('access_token') > 0) {
      params = location.search.split('&');
    } else if (location.hash.indexOf('access_token') > 0) {
      params = location.hash.substr(1).split('&');
    } else {
      return null;
    }
    const token = new OAuth2Token();
    params.forEach(function (value, index) {
      const data = value.split('=');
      if (data.length === 2) {
        const key = decodeURIComponent(data[0]);
        const val = decodeURIComponent(data[1]);

        if (key === 'access_token') {
          token.accessToken = val;
        } else if (key === 'token_type') {
          token.tokenType = val;
        } else if (key === 'expires_in') {
          const date = new Date();
          date.setSeconds(date.getSeconds()  + parseFloat(val));
          token.expires = date;
        } else if (key === 'state') {
          token.state = val;
        }
      }
    });
    return token;
  }

  private getUserInfo(token: OAuth2Token): Observable<HttpResponse<TokenInfo>> {
    return this._http.get<TokenInfo>(this._authServiceConfig.userinfoEndpoint + '?token=' + token.accessToken, {
      observe: 'response',
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + token.accessToken)
        .set('Content-Type', 'text/json')
    });
  }

  private getEndYearStats(character: CharacterData): Observable<Array<Object>> {
    if (character.Type !== CharacterDataType.Active) {
      return null;
    }
    return this._http.get<Array<Object>>('https://esi.tech.ccp.is/latest/characters/' +
      character.CharacterID.toString() + '/stats/', {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + character.Token.accessToken)
        .set('Content-Type', 'text/json')
    });
  }

  public handleOAuthCallback(): Observable<Boolean> {
    return Observable.create(observer => {
      const token = this.getTokenFromUrl();
      if (token !== null) {
        this.getUserInfo(token).subscribe(userInfo => {
          if (userInfo.ok) {
            const character = new CharacterData();
            character.Token = token;
            character.Type = CharacterDataType.Active;
            character.CharacterID = userInfo.body.CharacterID;
            character.CharacterName = userInfo.body.CharacterName;
            this.getEndYearStats(character).subscribe(statsData => {
              character.Stats = statsData;
              this.removeCharacter(character.CharacterID);
              this.characters.push(character);
              this.setSelectedCharacter(character.CharacterID);
              this.saveCharacters();
              observer.next(true);
              observer.complete();
            });
          } else {
            observer.next(false);
            observer.complete();
          }
        });
      } else {
        observer.next(false);
        observer.complete();
      }
    });
  }

  public getCharacters(): CharacterData[] {
    let save = false;
    for (let index = 0; index < this.characters.length; index++) {
      if (this.characters[index].Type === CharacterDataType.Active
        && (new Date()).getTime() >= this.characters[index].Token.expires.getTime()) {
        this.characters[index].Type = CharacterDataType.Cached;
        this.characters[index].Token = null;
        save = true;
      }
    }
    if (save) {
      this.saveCharacters();
    }
    return this.characters;
  }

  public setSelectedCharacter(CharacterID: number): void {
    for (let index = 0; index < this.characters.length; index++) {
      if (this.characters[index].CharacterID === CharacterID) {
        this.characters[index].Selected = true;
      } else {
        this.characters[index].Selected = false;
      }
    }
    this.saveCharacters();
  }

  public removeCharacter(CharacterID: number): void {
    let save = false;
    for (let index = 0; index < this.characters.length; index++) {
      if (this.characters[index].CharacterID === CharacterID) {
        this.characters.splice(index);
        save = true;
      }
    }
    if (save) {
      this.saveCharacters();
    }
  }

  private loadCharacters(): void {
    const data = JSON.parse(localStorage.getItem('characters')) || [];
    this.characters = [];

    // Parse Dates
    data.forEach((value, index, array) => {
      const parsedCharacter = new CharacterData();
      parsedCharacter.CharacterID = value.CharacterID;
      parsedCharacter.CharacterName = value.CharacterName;
      parsedCharacter.Stats = value.Stats;
      parsedCharacter.Type = value.Type;
      parsedCharacter.Selected = value.Selected;
      if (parsedCharacter.Type === CharacterDataType.Active) {
        parsedCharacter.Token = new OAuth2Token();
        parsedCharacter.Token.accessToken = value.Token.accessToken;
        parsedCharacter.Token.expires = new Date(value.Token.expires);
        parsedCharacter.Token.state = value.Token.state;
        parsedCharacter.Token.tokenType = value.Token.tokenType;
      } else {
        parsedCharacter.Token = null;
      }
      this.characters.push(parsedCharacter);
    });
  }

  private saveCharacters(): void {
    localStorage.setItem('characters', JSON.stringify(this.characters));
  }

  public getSelectedCharacter(): CharacterData {
    for (let i = 0; i < this.characters.length; i++) {
      if (this.characters[i].Selected) {
        return this.characters[i];
      }
    }
  }

  public getAggregateStats(): Object[] {
    const aggregateStats = [];
    for (let i = 0; i < this.characters.length; i++) {
      const character = this.characters[i];
      for (let j = 0; j < this.characters[i].Stats.length; j++) {
        let found = false;
        const stat = character.Stats[j];
        for (let y = 0; y < aggregateStats.length; y++) {
          const aggregate = aggregateStats[y];
          if (aggregate.year === stat['year']) {
            found = true;
            const year = aggregate.year;
            aggregateStats[y] = this.addObjects(aggregate, stat);
            aggregateStats[y].year = year;
          }
        }
        if (!found) {
          aggregateStats.push(stat);
        }
      }
    }
    return aggregateStats;
  }

  private addObjects(base: Object, add: Object): Object {
    for (const property in add) {
      if (add.hasOwnProperty(property)) {
        if (base.hasOwnProperty(property)) {
          if (isNumber(add[property]) && isNumber(base[property])) {
            base[property] = base[property] + add[property];
          } else {
            base[property] = this.addObjects(base[property], add[property]);
          }
        } else {
          base[property] = add[property];
        }
      }
    }
    return base;
  }
}

export enum CharacterDataType {
  Active,
  Cached,
  Shared
}

export class CharacterData {
  public Type: CharacterDataType;
  public CharacterName: string;
  public CharacterID: number;
  public Stats: Object[];
  public Token: OAuth2Token;
  public Selected: boolean;
}

export class OAuth2Token {
  public accessToken: string;
  public tokenType: string;
  public expires: Date;
  public state: string;
}

export class TokenInfo {
  public CharacterID: number;
  public CharacterName: string;
  public CharacterOwnerHash: string;
  public ExpiresOn: string;
  public IntellectualProperty: string;
  public Scopes: string;
  public TokenType: string;
}
