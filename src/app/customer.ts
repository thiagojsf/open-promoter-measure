import { Person } from './person';
import { Gender } from './gender';

export class Customer implements Person {
   public name:string;
   public email:string;
   public age:number;
   public gender:Gender;
   public city:string;
}