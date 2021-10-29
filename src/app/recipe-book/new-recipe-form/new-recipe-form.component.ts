import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

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

  recipeNameFormGroup: FormGroup;
  recipeDescriptionFormGroup: FormGroup;
  recipeImageFormGroup: FormGroup;
  recipeSaucesFormGroup: FormGroup;     //Checkboxes
  recipeIngredientsFormGroup: FormGroup;    //New Input cum Dropdown

  constructor(private _formBuilder: FormBuilder) { }

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
    this.recipeSaucesFormGroup = this._formBuilder.group({
      sauces: this._formBuilder.array([
        this._formBuilder.control('')
      ])
    });
    this.recipeIngredientsFormGroup = this._formBuilder.group({
      ingredients: this._formBuilder.array([
        this._formBuilder.control('')
      ])
    });
  }

}
