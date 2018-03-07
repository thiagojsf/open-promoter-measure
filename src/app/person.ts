import { Gender } from "./gender";

export interface Person {

   name: string;
   emailList: string[];
   isBrazilian: boolean;
   age: number;
   details: any;
   gender: Gender;
   voidTest: void;

}