import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { AuthServiceConfig } from './auth.service.config';
import { Observable } from 'rxjs/Observable';
import {  } from 'rxjs/operators/';

@Injectable()
export class AuthService {
  private tokens: TokenData[];
  private currentToken: TokenData;
  private currentStats: Object;

  private oTokens: Observable<TokenData[]>;
  private oCurrentToken: Observable<TokenData>;

  constructor(private _http: HttpClient,
    @Optional() private _authServiceConfig: AuthServiceConfig
  ) {
    this.loadTokens();
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

  public getTokenFromUrl(): OAuth2Token {
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

  public getUserInfo(token: OAuth2Token): Observable<HttpResponse<TokenInfo>> {
    return this._http.get<TokenInfo>(this._authServiceConfig.userinfoEndpoint + '?token=' + token.accessToken, {
      observe: 'response',
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + token.accessToken)
        .set('Content-Type', 'text/json')
    });
  }

  public getEndYearStats(): Observable<Array<Object>> {
    return this._http.get<Array<Object>>('https://esi.tech.ccp.is/latest/characters/' +
      this.currentToken.tokenInfo.CharacterID.toString() + '/stats/', {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.currentToken.oAuthToken.accessToken)
        .set('Content-Type', 'text/json')
    });
  }

  public updateEndYearStats(): void {
    this.getEndYearStats().subscribe(data => {
      this.currentStats = data;
    });
  }

  private loadTokens(): void {
    const data =  JSON.parse(localStorage.getItem('tokens')) || [];

    this.currentToken = null;
    this.tokens = [];

    // Parse Dates
    data.forEach((value, index, array) => {
      const parsedToken = new TokenData();

      parsedToken.oAuthToken = new OAuth2Token();
      parsedToken.oAuthToken.accessToken = value.oAuthToken.accessToken;
      parsedToken.oAuthToken.expires = new Date(value.oAuthToken.expires);
      parsedToken.oAuthToken.state = value.oAuthToken.state;
      parsedToken.oAuthToken.tokenType = value.oAuthToken.tokenType;

      parsedToken.tokenInfo = new TokenInfo();
      parsedToken.tokenInfo.CharacterID = value.tokenInfo.CharacterID;
      parsedToken.tokenInfo.CharacterName = value.tokenInfo.CharacterName;
      parsedToken.tokenInfo.CharacterOwnerHash = value.tokenInfo.CharacterOwnerHash;
      parsedToken.tokenInfo.ExpiresOn = value.tokenInfo.ExpiresOn;
      parsedToken.tokenInfo.IntellectualProperty = value.tokenInfo.IntellectualProperty;
      parsedToken.tokenInfo.Scopes = value.tokenInfo.Scopes;
      parsedToken.tokenInfo.TokenType = value.tokenInfo.TokenType;

      this.tokens.push(parsedToken);
    });

    if (this.tokens.length !== 0) {
      this.setCurrentToken(this.tokens[0].tokenInfo.CharacterID);
    }
  }

  private saveTokens(): void {
    localStorage.setItem('tokens', JSON.stringify(this.tokens));
  }

  public getTokens(): TokenData[] {
    for (let index = 0; index < this.tokens.length; index++) {
      const element = this.tokens[index];
      if ((new Date()).getTime() >= element.oAuthToken.expires.getTime()) {
        this.removeToken(element.tokenInfo.CharacterID);
      }
    }
    return this.tokens;
  }

  public addToken(tokenInfo: TokenInfo, oAuthToken: OAuth2Token): void {
    this.removeToken(tokenInfo.CharacterID);
    const data = new TokenData();
    data.tokenInfo = tokenInfo;
    data.oAuthToken = oAuthToken;
    this.tokens.push(data);
    this.setCurrentToken(data.tokenInfo.CharacterID);
    this.saveTokens();
  }

  public removeToken(CharacterID: number): void {
    for (let index = 0; index < this.tokens.length; index++) {
      const element = this.tokens[index];
      if (element.tokenInfo.CharacterID === CharacterID) {
        this.tokens.splice(index);
        this.saveTokens();
      }
    }
    if (this.currentToken != null && this.currentToken.tokenInfo.CharacterID === CharacterID) {
      if (this.tokens.length === 0) {
        this.currentToken = null;
      } else {
        this.setCurrentToken(this.tokens[0].tokenInfo.CharacterID);
      }
    }
  }

  public getToken(CharacterID: number): Observable<TokenData> {
    const self = this;
    return Observable.create(function (observer) {
      self.getTokens().forEach(value => {
        if (value.tokenInfo.CharacterID === CharacterID) {
          observer.next(value);
        }
      });
    });
  }

  public getTokenById(CharacterID: number): TokenData {
    for (let index = 0; index < this.tokens.length; index++) {
      const element = this.tokens[index];
      if (element.tokenInfo.CharacterID === CharacterID) {
        return element;
      }
    }
    return null;
  }

  public getCurrentToken(): TokenData {
    return this.currentToken;
  }

  public setCurrentToken(CharacterID: number): void {
    this.currentToken = this.getTokenById(CharacterID);
    this.updateEndYearStats();
  }

  public getCurrentStats(): Object {
    return this.currentStats;
  }
}

export class TokenData {
  public tokenInfo: TokenInfo;
  public oAuthToken: OAuth2Token;
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
