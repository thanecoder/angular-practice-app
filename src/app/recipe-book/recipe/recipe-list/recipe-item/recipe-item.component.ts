import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private recipeBookService:RecipeBookService,private activatedRoute:ActivatedRoute, private router:Router) {
    this.recipeBookServ = recipeBookService;
  }

  ngOnInit(): void { }

  showRecipeDetails(recipe:Recipe){
    // this.recipeBookServ.selectedRecipe.next(recipe);
    this.router.navigate(['./details'],{relativeTo: this.activatedRoute,queryParams:{ id:recipe.id}});
  }

  updateRecipe(event,recipe:Recipe){
    event.stopPropagation();
    this.router.navigate(['./update',recipe.id],{relativeTo: this.activatedRoute});
  }

}
