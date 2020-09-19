import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto-emprego-frontend';
  sideMenuOpened = false;

  get menuIcone() {
    return (this.sideMenuOpened && 'menu_open') || 'menu' 
  }

  clickMenu() {
  this.sideMenuOpened = !this.sideMenuOpened
}


}
