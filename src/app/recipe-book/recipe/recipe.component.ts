import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeBookService } from 'src/app/services/recipe-book.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers:[RecipeBookService]
})
export class RecipeComponent implements OnInit {

  @ViewChild(RecipeListComponent) recipeList: RecipeListComponent;
  @ViewChild(RecipeDetailComponent) recipeDetail: RecipeDetailComponent;


  constructor(private recipeBookService:RecipeBookService, private router:Router,private activatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getAllRecipes();
  }

getAllRecipes(){
  if(!this.recipeList){
    console.log('Into this undefined if condition');
    this.recipeBookService.recipesArr.push(this.recipeBookService.dummyRecipe);
  }
  console.log('calling api');
  this.recipeBookService.getAllRecipesFromDB().subscribe(
    (result)=>{
      console.log('api result called');
      let recipeArr = (result) as Array<Recipe>;
      this.recipeBookService.recipesArr = recipeArr;
      this.recipeList.recipes = recipeArr;
    },
    (error)=>{
      console.log(error);
      this.recipeList.recipes.push(this.recipeBookService.dummyRecipe);
    }
  );
  }

  getAllRecipesForListOnly(){
    this.recipeBookService.getAllRecipesFromDB().subscribe(
      (result)=>{
        let recipeArr = (result) as Array<Recipe>;
        this.recipeBookService.recipesArr = recipeArr;
      },
      (error)=>{
        console.log(error);
        this.recipeList.recipes.push(this.recipeBookService.dummyRecipe);
      }
    );
  }

}
