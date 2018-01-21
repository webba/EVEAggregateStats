import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthServiceConfig } from './auth.service.config';


@Injectable()
export class AuthService {

  constructor(private _http: HttpClient,
    @Optional() private _authServiceConfig: AuthServiceConfig
  ) { }

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
      console.log(value);
      if (data.length === 2) {
        const key = decodeURIComponent(data[0]);
        const val = decodeURIComponent(data[1]);

        if (key === 'access_token') {
          token.access_token = val;
        } else if (key === 'token_type') {
          token.token_type = val;
        } else if (key === 'expires_in') {
          token.expires_in = parseFloat(val);
        } else if (key === 'state') {
          token.state = val;
        }
      }
    });
    return token;
  }

  public getUserInfo(token: OAuth2Token): Object {
    const resp = this._http.get<Object>(this._authServiceConfig.userinfoEndpoint, {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + token.access_token)
        .set('Content-Type', 'text/json')
    }).toPromise().then(function(re) { console.log(re); });
    return resp;
  }

}

export class OAuth2Token {
  public access_token = '';

  public token_type = '';

  public expires_in = 0;

  public state = '';
}
