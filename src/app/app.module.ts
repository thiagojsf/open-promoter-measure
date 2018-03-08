import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { SetupScreenComponent } from './setup-screen/setup-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    NavbarComponent,
    LogoComponent,
    SetupScreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
