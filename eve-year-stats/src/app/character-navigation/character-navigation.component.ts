import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService, TokenData } from '../auth/auth.service';

@Component({
  selector: 'app-character-navigation',
  templateUrl: './character-navigation.component.html',
  styleUrls: ['./character-navigation.component.css']
})
export class CharacterNavigationComponent implements OnInit {
  tokens: TokenData[] = [];


  constructor(
    private _authService: AuthService,
    private _route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.getTokens();
  }

  private getTokens() {
    this.tokens = this._authService.getTokens();
  }

}
