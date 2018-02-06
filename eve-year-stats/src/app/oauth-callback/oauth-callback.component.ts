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
	 }

	ngOnInit() {
		this._authService.handleOAuthCallback().subscribe(newToken => {
				this._router.navigate(['/']);
		});
	}

}
