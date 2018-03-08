import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { QuestionComponent } from './question/question.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';


@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    QuestionComponent,
    NavbarComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
