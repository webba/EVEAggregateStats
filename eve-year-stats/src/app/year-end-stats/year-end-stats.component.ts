import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService, TokenData } from '../auth/auth.service';

@Component({
  selector: 'app-year-end-stats',
  templateUrl: './year-end-stats.component.html',
  styleUrls: ['./year-end-stats.component.css']
})
export class YearEndStatsComponent implements OnInit {
  public displayText: string;
  public token: TokenData;

  constructor(
    private _authService: AuthService,
    private _route: ActivatedRoute
  ) {
    console.log(_authService.getTokens());
    const self = this;
    if (this._authService.getTokens().length > 0) {
      _authService.getEndYearStats(_authService.getTokens()[0].tokenInfo.CharacterID, _authService.getTokens()[0].oAuthToken.accessToken)
      .subscribe((data) => {
        self.displayText = JSON.stringify(data);
      }, (error) => {
        self.displayText = JSON.stringify(error);
      }, () => {
      });
    }
   }

  ngOnInit() {
    this.getToken();
  }

  getToken(): void {
    const self = this;
    const id = +this._route.snapshot.paramMap.get('id');
    this._authService.getTokens().forEach((value) => {
      if (value.tokenInfo.CharacterID === id) {
        self.token = value;
      }
    });
  }

}
