import { Gender } from "./gender";

export interface Person {
    name?: string;
   email?: string;
   age: number;
   city: string;
   gender: Gender;

}