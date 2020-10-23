import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'projeto-emprego-frontend';
  sideMenuOpened = false;
  showSideMenu;

  constructor(
    private route: Router) { }

  ngOnInit(): void {
    this.route.events.pipe(
      filter(e => e instanceof ActivationEnd),
      map(e  => (e as any).snapshot.data)).subscribe(params => {
      this.showSideMenu = params['showSideMenu']
      console.log(params)
    })

  }


  get menuIcone() {
    return (this.sideMenuOpened && 'menu_open') || 'menu'
  }

  clickMenu() {
    this.sideMenuOpened = !this.sideMenuOpened
  }


}
