import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService, TokenData } from '../auth/auth.service';
import 'rxjs/add/operator/switchMap';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-year-end-stats',
  templateUrl: './year-end-stats.component.html',
  styleUrls: ['./year-end-stats.component.css']
})

export class YearEndStatsComponent implements OnInit {
  public token$: Observable<TokenData>;

  private id: number;
  public stats: Object;

  constructor(
    private _authService: AuthService,
    private _route: ActivatedRoute
  ) {
    console.log(_authService.getTokens());
   }

  ngOnInit() {
    this.token$ = this._route.paramMap.switchMap((params: ParamMap) => {
      return this._authService.getToken(parseFloat(params.get('id')));
    });

    this.token$.subscribe(token => {
      this._authService.getEndYearStats(token.tokenInfo.CharacterID, token.oAuthToken.accessToken)
      .subscribe((data) => {
        this.stats = data;
        console.log(data);
      });
    });
  }

}
