import { Component, OnInit, ViewChild } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeBookService } from 'src/app/services/recipe-book.service';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers:[RecipeBookService]
})
export class RecipeComponent implements OnInit {

  @ViewChild(RecipeListComponent) recipeList: RecipeListComponent;

  constructor(private recipeBookService:RecipeBookService) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.getAllRecipes();
  }

  getAllRecipes(){
    this.recipeBookService.getAllRecipesFromDB().subscribe(
      (result)=>{
        // console.log(result.data);
        this.recipeList.recipes = (result) as Array<Recipe>;
        this.recipeBookService.selectedRecipe.next(this.recipeList.recipes[0]);
      },
      (error)=>{
        console.log(error);
        this.recipeList.recipes.push(this.recipeBookService.dummyRecipe);
      }
    );
    if(!this.recipeList.recipes){
      this.recipeList.recipes.push(this.recipeBookService.dummyRecipe);
    }
  }

}
