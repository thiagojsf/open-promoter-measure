import { Gender } from "./gender";

export interface Person {
    name?: string;
   email?: string;
   age: number;
   gender: Gender;

}