import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AuthService, CharacterData } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-character-navigation',
	templateUrl: './character-navigation.component.html',
	styleUrls: ['./character-navigation.component.css']
})
export class CharacterNavigationComponent implements OnInit {
	private aggregate = false;

	constructor(
		private _authService: AuthService,
		private _route: ActivatedRoute,
		private _router: Router
	) {

	}

	ngOnInit() {
	}

	public getCharacters(): CharacterData[] {
		return this._authService.getCharacters();
	}

	public getSelectedToken(): CharacterData {
		return this._authService.getSelectedCharacter();
	}

	public setSelectedCharacter(CharacterID: number): void {
		this._authService.setAggregate(false);
		this._authService.setSelectedCharacter(CharacterID);
	}

	public login() {
		location.href = this._authService.getLoginUrl();
	}

	public setAggregate() {
		this._authService.setAggregate(true);
	}

	public getAggregate() {
		return this._authService.getAggregate();
	}
}
