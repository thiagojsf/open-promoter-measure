import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})

export class DadosPessoaisComponent implements OnInit {

  @Input() customer: Customer;
  @Output() customerChange: EventEmitter<Customer> = new EventEmitter();

  constructor() {
  }

  update(){
    this.customerChange.emit(this.customer);
  }

  ngOnInit() {
    this.customer = new Customer();
  }

}
