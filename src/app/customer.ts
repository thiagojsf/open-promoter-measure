import { Person } from './person';
import { Gender } from './gender';
import { HR } from './employee';

export class Customer implements Person {
   name: string;
   emailList: string[];
   isBrazilian: boolean;
   age: number;
   details: any;
   gender: Gender;
   voidTest: void;
   public customerCode: number;
   protected customerId: number;

   constructor() {}

   public feedbackCompany(employee: HR.Employee, score: number) {
      employee.score = score;
   }
   

}