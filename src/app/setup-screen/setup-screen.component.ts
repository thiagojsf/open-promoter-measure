import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup-screen',
  templateUrl: './setup-screen.component.html',
  styleUrls: ['./setup-screen.component.css']
})
export class SetupScreenComponent implements OnInit {
public urlLogo:string;
public height:number;
public width:number;


  constructor() { }

  ngOnInit() {
  }

  eventTest() {
    console.log(this);
  }

}
