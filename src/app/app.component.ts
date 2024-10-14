import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFirstCompComponent } from "./my-first-comp/my-first-comp.component";
import { MySecondCompComponent } from "./my-second-comp/my-second-comp.component";
import { MenuComponent } from "./menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyFirstCompComponent, MySecondCompComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { 
  title = 'angular_crash_course';
}
