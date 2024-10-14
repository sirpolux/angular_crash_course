import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages:Array<any>=[];


  init():void{
    this.insert({
      name:"Mac Paul",
      email:"paul@gmail.com",
      message:"Sample message 1"
    });

    this.insert({
      name:"Peter John",
      email:"peter@gmail.com",
      message:"Sample message 2"
    });
    
    this.insert({
      name:"Monday John",
      email:"monday@gmail.com",
      message:"Sample message 3"
    });
  }

  constructor() {
    this.init();
   }

  insert(message:{name:string, email:string, message:string}){
    this.messages.push(message);
  }

  getMessages(){
    return this.messages;
  }

  deleteMessages(index:number){
    this.messages.splice(index, 1);
  } 
}
