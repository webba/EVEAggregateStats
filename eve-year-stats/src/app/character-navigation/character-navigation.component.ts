import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AuthService, TokenData } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-character-navigation',
  templateUrl: './character-navigation.component.html',
  styleUrls: ['./character-navigation.component.css']
})
export class CharacterNavigationComponent implements OnInit {
  token$: Observable<TokenData>[];
  currentToken$: Observable<TokenData>;


  constructor(
    private _authService: AuthService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {

  }

  ngOnInit() {
    // this.getTokens();
    // if (this._route.children.length === 0 && this.tokens.length > 0) {
    //   this._router.navigate(['/stats', this._authService.getTokens()[0].tokenInfo.CharacterID]);
    // }
    // this.currentToken$ = this._route.paramMap.switchMap((params: ParamMap) => {
    //   return this._authService.getCurrentToken();
    // });
  }

  private getTokens() {
    return this._authService.getTokens();
  }

  public getCurrentToken(): TokenData {
    return this._authService.getCurrentToken();
  }

  public setCurrentToken(CharacterID: number): void {
    this._authService.setCurrentToken(CharacterID);
    console.log(this.getCurrentToken());
  }

}
