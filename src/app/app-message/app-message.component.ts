import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-message.component.html',
  styleUrl: './app-message.component.scss'
})
export class AppMessageComponent {




  @Input()
  message:any={}
  @Input()
  index:number=-1;

  @Output()
  delete:EventEmitter<number> = new EventEmitter<number>;

  onDelete() {
    this.delete.emit(this.index);
  }
}
