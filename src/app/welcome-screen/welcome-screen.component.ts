import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { DataService } from '../data.service';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})

export class WelcomeScreenComponent implements OnInit {
  
  name: string;

  constructor(public dataService: DataService) { }

  get customer():Customer { 
    return this.dataService.customerData; 
  } 
  
  set customer(value: Customer) { 
    this.dataService.customerData = value; 
  } 

  ngOnInit() {
  }
}
