import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeBookService } from './services/recipe-book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('drawer') sidenav : MatSidenav;
  title = 'recipe-list-shopping-list';
  isUserLoggedIn:boolean = false;

  constructor(private recipeBookService:RecipeBookService, private router:Router,private activatedRoute:ActivatedRoute){

  }

  ngOnInit(){
    this.checkIfUserLoggedIn();
  }

  checkIfUserLoggedIn(){
    let sessionToken = localStorage.getItem('sessionToken');
    if(sessionToken){
      this.isUserLoggedIn = true;
    }
  }

  userLoggedIn(){
    this.isUserLoggedIn = true;
  }

  logOutUser(){
    localStorage.removeItem('sessionToken');
    this.isUserLoggedIn = false;
    this.sidenav.toggle();
  }

  toggleSidenav(){
    this.sidenav.toggle();
  }
}
