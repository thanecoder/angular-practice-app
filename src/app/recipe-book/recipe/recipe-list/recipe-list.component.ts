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
    this.getAllRecipes();
  }

  getAllRecipes(){
    this.recipeBookService.getAllRecipesFromDB().subscribe(
      (result)=>{
        // console.log(result.data);
        this.recipes = (result) as Array<Recipe>;
        this.recipeBookService.selectedRecipe.next(this.recipes[0]);
      },
      (error)=>{
        console.log(error);
        this.recipes.push(this.recipeBookService.dummyRecipe);
      }
    );
    if(!this.recipes){
      this.recipes.push(this.recipeBookService.dummyRecipe);
    }
  }

  goToNewRecipeForm(){
    this.router.navigate(['/','newrecipe']);
  }


}
