import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeBookService } from 'src/app/services/recipe-book.service';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css']
})
export class UpdateRecipeComponent implements OnInit {

  recipeForm:FormGroup;

  constructor(private _builder:FormBuilder, private activatedRoute:ActivatedRoute, private recipeBookServ:RecipeBookService, private router:Router) { }

  ngOnInit(): void {
    this.recipeForm = this._builder.group(
      {
        recipeId:this._builder.control(['']),
        recipeName:this._builder.control(['']),
        recipeDesc:this._builder.control(['']),
        recipeImg:this._builder.control([''])
      }
    )
    this.activatedRoute.params.subscribe(
      (params)=>{
        console.log(params);
        console.log(this.recipeBookServ.recipesArr.filter(r => r.id == parseInt(params.id)));
        let recipeToBeUpdated:Recipe = this.recipeBookServ.recipesArr.filter(r => r.id == parseInt(params.id))[0];
        console.log(recipeToBeUpdated);
        if(recipeToBeUpdated){
          this.recipeForm.setValue(
            {
              recipeId:recipeToBeUpdated.id,
              recipeName:recipeToBeUpdated.name,
              recipeDesc:recipeToBeUpdated.description,
              recipeImg:recipeToBeUpdated.imagePath
            }
          )
        }
      }
    )
  }

  sendUpdatedRecipeToDB(){
    let reqObj = {
      recipeId:parseInt(this.recipeForm.controls['recipeId'].value),
      recipeName:this.recipeForm.controls['recipeName'].value,
      recipeDesc:this.recipeForm.controls['recipeDesc'].value,
      recipeImg:this.recipeForm.controls['recipeImg'].value
    }
    this.recipeBookServ.updateRecipe(reqObj).subscribe(
      (result) => {
        console.log('result',result);
        let recipeToBeUpdated:Recipe = this.recipeBookServ.recipesArr.find(r => r.id == reqObj.recipeId);
        recipeToBeUpdated.name = reqObj.recipeName;
        recipeToBeUpdated.description = reqObj.recipeDesc;
        recipeToBeUpdated.imagePath = reqObj.recipeImg;
        this.router.navigate(['../../details'],{relativeTo: this.activatedRoute,queryParams:{ id:reqObj.recipeId}});
      },
      (error) => {
        console.log(error);
      }
    );
    
  }

}
