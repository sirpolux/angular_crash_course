import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppMessageComponent } from "../app-message/app-message.component";

@Component({
  selector: 'app-my-first-comp',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    AppMessageComponent
],
  templateUrl: './my-first-comp.component.html',
  styleUrl: './my-first-comp.component.scss'
})
export class MyFirstCompComponent {

  name:string = '';
  email:string = '';
  message:string='';
  isSubmitted:boolean = false;
  messages:Array<any> =[];

  onSubmit() {
    this.isSubmitted=true;
    this.messages.push(
      {
        'name':this.name,
        'email':this.email,
        'message':this.message
      }
  );
    console.log(this.messages)
  }

  deleteMessage(index:number) {
    this.messages.splice(index,1);
  }
}
