import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MyService {

  userIdop : number;
  constructor(){}
  
  setValue(value: number){
           this.userIdop = value
     }

  getId(){
  return this.userIdop;
    }
}

