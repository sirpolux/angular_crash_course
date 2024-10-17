import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  navigateToAbout() {
    this.router.navigate(['/about']);
  }
  ngOnInit(): void {
    
  }

}
