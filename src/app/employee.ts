import { Person } from "./person";

export namespace HR {

   export class Employee implements Person {
      name: string;
      emailList: string[];
      isBrazilian: boolean;
      age: number;
      details: any;
      gender: any;
      voidTest: void;
      city: string;
      private _score: number;
      
      get score() : number {
         return this._score;
      }

      set score(val: number) {
         this._score = val;
      }


   }

}