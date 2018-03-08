import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
<<<<<<< HEAD
import { GreetingComponent } from './greeting/greeting.component';
=======
import { QuestionComponent } from './question/question.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
>>>>>>> 70482489dc64172186267b35f3a4495f47dff26c


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    GreetingComponent
=======
    QuestionComponent,
    NavbarComponent,
    LogoComponent
>>>>>>> 70482489dc64172186267b35f3a4495f47dff26c
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
