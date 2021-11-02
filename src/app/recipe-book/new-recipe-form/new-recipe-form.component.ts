import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { Router } from '@angular/router';
import { RecipeBookService } from 'src/app/services/recipe-book.service';

import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-new-recipe-form',
  templateUrl: './new-recipe-form.component.html',
  styleUrls: ['./new-recipe-form.component.css'],
  providers:[{
      provide: STEPPER_GLOBAL_OPTIONS, 
      useValue: {showError: true}
    }
  ]
})
export class NewRecipeFormComponent implements OnInit {

  newRecipeForm:FormGroup;
  recipeNameFormGroup: FormGroup;
  recipeDescriptionFormGroup: FormGroup;
  recipeImageFormGroup: FormGroup;
  recipeSaucesFormGroup: FormGroup;     //Checkboxes
  recipeIngredientsFormGroup: FormGroup;    //New Input cum Dropdown

  sauces: string[] = ['Tandoori Mayo', 'Mint Mayo', 'Sweet Onion', 'Barbeque'];
  ingredientUnits:string[] = ['slices','teaspoons','dollops','tablespoons','cups','gms','ltrs']

  constructor(private _formBuilder: FormBuilder, private router:Router,
    private recipeBookServ:RecipeBookService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.recipeNameFormGroup = this._formBuilder.group({
      recipeName: ['', Validators.required]
    });
    this.recipeDescriptionFormGroup = this._formBuilder.group({
      recipeDescription: ['', Validators.required]
    });
    this.recipeImageFormGroup = this._formBuilder.group({
      imagePath: ['', Validators.required]
    });
    this.recipeIngredientsFormGroup = this._formBuilder.group({
      ingredients: this._formBuilder.array([this.createIngredientInput()], Validators.required)
    });
    this.recipeSaucesFormGroup = this._formBuilder.group({});

    this.recipeSaucesFormGroup.addControl('sauces',new FormGroup({}));

    this.sauces.forEach(sauce=>{
      let sauceFormGrp = this.recipeSaucesFormGroup.controls['sauces'] as FormGroup;
      sauceFormGrp.addControl(sauce,new FormControl(false));
    });
    console.log('this.recipeIngredientsFormGroup',this.recipeIngredientsFormGroup);

  }

  addIngredient(){
    let ingredients = this.recipeIngredientsFormGroup.controls['ingredients'] as FormArray;
    ingredients.push(this.createIngredientInput());
  }

  deleteIngredient(){
    let ingredients = this.recipeIngredientsFormGroup.controls['ingredients'] as FormArray;
    ingredients.removeAt(ingredients.length-1);
  }

  get ingredients() {
    return this.recipeIngredientsFormGroup.get('ingredients') as FormArray;
  }

  createIngredientInput():FormGroup{
    return new FormGroup({
      name:new FormControl(''),
      units:new FormControl('')
    });
  }

  goToHomeScreen(){
    this.router.navigate(['/','recipebook']);
  }

  submitForm(){
    let reqObj = {
      name:this.recipeNameFormGroup.controls['recipeName'].value,
      description:this.recipeDescriptionFormGroup.controls['recipeDescription'].value,
      img:this.recipeImageFormGroup.controls['imagePath'].value,
      ingredients:this.recipeIngredientsFormGroup.value,
      sauces:this.recipeSaucesFormGroup.value
    }
    console.log(reqObj);
    this.recipeBookServ.insertRecipeToDB(reqObj).subscribe(
      (result)=>{
        console.log('Result : ',result);
        this.openSnackBar("Recipe added to DB","Okay");
      },
      (error)=>{
        console.log("Error : ",error);
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration:5*1000});
  }

}
