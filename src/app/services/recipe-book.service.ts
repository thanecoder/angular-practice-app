import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeBookService {

  recipeArr:Recipe[] = [
    new Recipe(1,'A Test Recipe 1',"This is a simple text","https://cdn.pixabay.com/photo/2018/12/04/16/49/indian-food-3856044_960_720.jpg"),
    new Recipe(2,'A Test Recipe 2',"This is a simple text","https://cdn.pixabay.com/photo/2017/11/15/07/07/indian-food-2951094_960_720.jpg"),
    new Recipe(3,'A Test Recipe 3',"This is a simple text","https://cdn.pixabay.com/photo/2016/11/23/18/31/indian-food-1854247_960_720.jpg"),
    new Recipe(4,'A Test Recipe 4',"This is a simple text","https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_960_720.jpg"),
    new Recipe(5,'A Test Recipe 5',"This is a simple text","https://cdn.pixabay.com/photo/2014/06/18/15/48/indian-sweet-371357_960_720.jpg"),
  ]

  selectedRecipe = new BehaviorSubject<Recipe>(this.recipeArr[0]);

  constructor() { }

  getAllRecipesFromDB(){

  }

  getSingleRecipeFromDB(){

  }


}
