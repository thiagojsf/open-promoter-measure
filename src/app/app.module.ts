import 'rxjs/add/operator/map'; 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { GreetingComponent } from './greeting/greeting.component';
import { QuestionComponent } from './question/question.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { SetupScreenComponent } from './setup-screen/setup-screen.component';

import { ThanksComponent } from './thanks/thanks.component';
import { RankingComponent } from './ranking/ranking.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    DadosPessoaisComponent,
    GreetingComponent,
    QuestionComponent,
    NavbarComponent,
    LogoComponent,
    ThanksComponent,
    SetupScreenComponent,
    RankingComponent,
    SignUpComponent,
    WelcomeScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'signup', component: SignUpComponent },
      { path: 'welcome', component: WelcomeScreenComponent }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
