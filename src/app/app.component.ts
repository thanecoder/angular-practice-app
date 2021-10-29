import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('drawer') sidenav : MatSidenav;
  title = 'recipe-list-shopping-list';

  toggleSidenav(){
    this.sidenav.toggle();
  }
}
