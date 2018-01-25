import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AuthService } from './auth/auth.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OAuthCallbackComponent } from './oauth-callback/oauth-callback.component';
import { YearEndStatsComponent } from './year-end-stats/year-end-stats.component';
import { CharacterNavigationComponent } from './character-navigation/character-navigation.component';
import { CharacterStatComponent } from './character-stat/character-stat.component';
import { CombatChartComponent } from './combat-chart/combat-chart.component';

const appRoutes: Routes = [
  { path: 'oauth-callback', component: OAuthCallbackComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'stats',
    component: CharacterNavigationComponent
  },
  { path: '', redirectTo: 'stats', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OAuthCallbackComponent,
    YearEndStatsComponent,
    CharacterNavigationComponent,
    CharacterStatComponent,
    CombatChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
