import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService, CharacterData } from '../auth/auth.service';
import 'rxjs/add/operator/switchMap';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-year-end-stats',
  templateUrl: './year-end-stats.component.html',
  styleUrls: ['./year-end-stats.component.css']
})

export class YearEndStatsComponent implements OnInit {
  constructor(
    private _authService: AuthService,
    private _route: ActivatedRoute
  ) {
   }

  ngOnInit() {
  }

  public getSelectedCharacter(): CharacterData {
    return this._authService.getSelectedCharacter();
  }

  public getSelectedStats(): Object[] {
    return this._authService.getSelectedStats();
  }

  public hasSelectedCharacter(): Boolean {
    return this._authService.getSelectedCharacter() != null;
  }
}
