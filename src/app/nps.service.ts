import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Customer } from './customer';
import { NPS } from './nps';


@Injectable()
export class NpsService {



  constructor( private http: HttpClient) { }

  getNps(): any{
    return this.http.get("http://192.168.13.66:3000/v1/nps");
  }

  postNps(customer: Customer, nps: NPS):any{
    return this.http.post("http://192.168.13.66:3000/v1/nps/save",{
      name: customer.name,
      age: customer.age,
      email: customer.email,
      ranking: nps.ranking,
      gender: customer.gender,
      city: customer.city
    });
  }

}
