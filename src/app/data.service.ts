import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable()
export class DataService {

  customerData: Customer;

  constructor() { }

}
