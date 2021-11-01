import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

import { RecipeBookService } from 'src/app/services/recipe-book.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('recipe') recipe:Recipe;
  recipeBookServ:RecipeBookService;

  constructor(private recipeBookService:RecipeBookService) {
    this.recipeBookServ = recipeBookService;
  }

  ngOnInit(): void { }

  showRecipeDetails(recipe:Recipe){
    this.recipeBookServ.selectedRecipe.next(recipe);
  }

}
