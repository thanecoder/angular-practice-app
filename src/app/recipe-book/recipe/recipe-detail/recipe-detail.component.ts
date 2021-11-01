import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeBookService } from 'src/app/services/recipe-book.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeToBeDisplayed: Recipe;
  recipeBookServ:RecipeBookService;

  constructor(private recipeBookService:RecipeBookService) { 
    this.recipeBookServ = recipeBookService;
  }

  ngOnInit(): void {
    this.getSelectedRecipe();
    setTimeout(()=>{
      if(!this.recipeToBeDisplayed){
        this.recipeToBeDisplayed = this.recipeBookService.dummyRecipe;
      }
    },1000)
  }

  getSelectedRecipe(){
    this.recipeBookServ.selectedRecipe.subscribe(
      (recipe)=>{
        this.recipeToBeDisplayed = recipe
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
