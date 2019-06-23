import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  header = [
    {name: 'O mnie', link: 'about'},
    {name: 'Prace', link: 'works'},
    {name: 'Kontakt', link: 'contact'}
]

navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}

