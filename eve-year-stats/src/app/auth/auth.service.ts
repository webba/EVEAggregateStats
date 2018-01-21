import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { AuthServiceConfig } from './auth.service.config';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private tokens: TokenData[];

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

  public getEndYearStats(CharacterID: number, AccessToken: string): Observable<Object> {
    return this._http.get('https://esi.tech.ccp.is/latest/characters/' + CharacterID.toString() + '/stats/', {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + AccessToken)
        .set('Content-Type', 'text/json')
    });
  }

  private loadTokens(): void {
    this.tokens =  JSON.parse(localStorage.getItem('tokens')) || [];
  }

  private saveTokens(): void {
    localStorage.setItem('tokens', JSON.stringify(this.tokens));
  }

  public getTokens(): TokenData[] {
    const self = this;
    this.tokens.forEach((element, index, array) => {
      if ((new Date()) >= (new Date(element.tokenInfo.ExpiresOn))) {
        self.removeToken(element.tokenInfo.CharacterID);
      }
    });
    return this.tokens;
  }

  public addToken(tokenInfo: TokenInfo, oAuthToken: OAuth2Token): void {
    this.removeToken(tokenInfo.CharacterID);
    const data = new TokenData();
    data.tokenInfo = tokenInfo;
    data.oAuthToken = oAuthToken;
    this.tokens.push(data);
    this.saveTokens();
  }

  public removeToken(CharacterID: number): void {
    this.tokens.forEach(function (value, index, list) {
      if (value.tokenInfo.CharacterID === CharacterID) {
        list.splice(index);
      }
    });
    this.saveTokens();
  }

  public getToken(CharacterID: number): Observable<TokenData> {
    const self = this;
    return Observable.create(function (observer) {
      self.tokens.forEach(value => {
        if (value.tokenInfo.CharacterID === CharacterID) {
          observer.next(value);
        }
      });
    });
  }

}

export class TokenData {
  tokenInfo: TokenInfo;
  oAuthToken: OAuth2Token;
}

export class OAuth2Token {
  public accessToken = '';

  public tokenType = '';

  public expires = new Date();

  public state = '';
}

export class TokenInfo {
  CharacterID: number;
  CharacterName: string;
  CharacterOwnerHash: string;
  ExpiresOn: string;
  IntellectualProperty: string;
  Scopes: string;
  TokenType: string;
}
