import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
public urlLogo:string;

  constructor() { }

  ngOnInit() {
    this.urlLogo = "assets/toyota-logo.jpg";
  }

}
