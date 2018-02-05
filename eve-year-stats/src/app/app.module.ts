import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AuthService } from './auth/auth.service';

import { AppComponent } from './app.component';
import { OAuthCallbackComponent } from './oauth-callback/oauth-callback.component';
import { YearEndStatsComponent } from './year-end-stats/year-end-stats.component';
import { CharacterNavigationComponent } from './character-navigation/character-navigation.component';
import { CharacterStatComponent } from './character-stat/character-stat.component';
import { CombatChartComponent } from './combat-chart/combat-chart.component';
import { CombatDamageComponentComponent } from './combat-damage-component/combat-damage-component.component';
import { DamageChartComponent } from './damage-chart/damage-chart.component';
import { Damage2ChartComponent } from './damage2-chart/damage2-chart.component';

const appRoutes: Routes = [
  { path: 'oauth-callback', component: OAuthCallbackComponent },
  {
    path: 'stats',
    component: CharacterNavigationComponent
  },
  { path: '', redirectTo: 'stats', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    OAuthCallbackComponent,
    YearEndStatsComponent,
    CharacterNavigationComponent,
    CharacterStatComponent,
    CombatChartComponent,
    CombatDamageComponentComponent,
    DamageChartComponent,
    Damage2ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    NgbModule.forRoot()
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
