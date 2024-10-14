import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppMessageComponent } from "../app-message/app-message.component";
import { MenuComponent } from '../menu/menu.component';
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-my-second-comp',
  standalone: true,
  imports: [FormsModule,
    CommonModule,
    AppMessageComponent,
    MenuComponent
  
  ],
  templateUrl: './my-second-comp.component.html',
  styleUrl: './my-second-comp.component.scss'
})
export class MySecondCompComponent {
  name:string = '';
  email:string = '';
  message:string='';
  isSubmitted:boolean = false;
  messages:Array<any> =[];




//property injection  
private service:MyFirstService = inject(MyFirstService);

  //Constructor Injection
  constructor(
    //private service:MyFirstService
  ){
    this.messages=this.service.getMessages();
    this.isSubmitted=this.messages.length>0
  }

  onSubmit() {
    this.isSubmitted=true;
    this.service.insert(
      {
        'name':this.name,
        'email':this.email,
        'message':this.message
      }
  );
    console.log(this.messages)
  }

  deleteMessage(index:number) {
    this.service.deleteMessages(index);
  }
}
