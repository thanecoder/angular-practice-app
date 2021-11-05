import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeBookService } from 'src/app/services/recipe-book.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [];

  constructor(private recipeBookService:RecipeBookService,private router:Router) {
  }

  ngOnInit(): void {

  }

  goToNewRecipeForm(){
    this.router.navigate(['/','newrecipe']);
  }


}
