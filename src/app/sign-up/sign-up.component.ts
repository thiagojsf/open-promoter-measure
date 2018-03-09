import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

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
