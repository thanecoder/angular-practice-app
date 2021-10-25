import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @ViewChild('sidenav') sidenav:MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidenav(){
    console.log('I have received event from Header Hamburger button click, so I will now open Sidenav');
    this.sidenav.toggle();
  }

}
