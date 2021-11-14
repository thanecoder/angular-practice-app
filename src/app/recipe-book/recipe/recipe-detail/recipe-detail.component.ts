import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeBookService } from 'src/app/services/recipe-book.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeToBeDisplayed: Recipe;
  recipeId:number;

  constructor(private recipeBookServ:RecipeBookService,private router:Router, private activatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getSelectedRecipe();
  }

  getSelectedRecipe(){
    this.activatedRoute.queryParams.subscribe(
      (params)=>{
        this.recipeId = params.id;
        if(this.recipeBookServ.recipesArr.length > 0){
          this.recipeToBeDisplayed = this.recipeBookServ.recipesArr.filter(r => r.id == this.recipeId)[0];
        }
        else{
          this.recipeToBeDisplayed = this.recipeBookServ.dummyRecipe;
        }

      }
    )
  }

  updateRecipe(){
    this.router.navigate(['../update',this.recipeId],{relativeTo: this.activatedRoute});
  }

}
