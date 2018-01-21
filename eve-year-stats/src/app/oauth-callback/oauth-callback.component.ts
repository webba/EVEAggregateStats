import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-oauth-callback',
  templateUrl: './oauth-callback.component.html',
  styleUrls: ['./oauth-callback.component.css']
})
export class OAuthCallbackComponent implements OnInit {

  constructor(private _authService: AuthService) {
    const token = this._authService.getTokenFromUrl();
    console.log(token);
    if (token !== null) {
      const userInfo = this._authService.getUserInfo(token);
      console.log(userInfo);
    }
   }

  ngOnInit() {
  }

}
