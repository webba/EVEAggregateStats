import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oauth-callback',
  templateUrl: './oauth-callback.component.html',
  styleUrls: ['./oauth-callback.component.css']
})
export class OAuthCallbackComponent implements OnInit {

  constructor(private _authService: AuthService, private _router: Router) {
    const token = this._authService.getTokenFromUrl();
    if (token !== null) {
      const userInfo = this._authService.getUserInfo(token).subscribe((response) => {
        console.log(response);
        if (response.ok) {
          token.expires = new Date(response.headers.get('expires'));
          console.log(response.headers.get('expires'));
          this._authService.addToken(response.body, token);
        }
        this._router.navigate(['/']);
      });
    } else {
      this._router.navigate(['/']);
    }
   }

  ngOnInit() {
  }

}
