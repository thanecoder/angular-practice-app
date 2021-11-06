import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { constants } from 'src/environments/app_constants';
import { environment } from 'src/environments/environment';
import { Recipe } from '../models/recipe.model';


@Injectable({
  providedIn: 'root'
})
export class RecipeBookService {

  recipesArr:Recipe[] = [];
  dummyRecipe = {
    id:999,
    name:"Test Recipe",
    description:"Test Description",
    imagePath:"https://cdn.pixabay.com/photo/2016/02/11/22/01/mistake-1194670_960_720.png"
  }
  loadRecipeList = new Subject();
  public httpOptions;

  constructor(private http: HttpClient) {
    this.httpOptions= {headers: new HttpHeaders({
      'Content-Type':  'application/json'
  })};
  }

  getAllRecipesFromDB(){
    return this.http.get(environment.API_URL+constants.GET_ALL_RECIPES, this.httpOptions).pipe(
        map(result => this.extractDataFromApiResult(result)),
        catchError(error => this.handleError(error))
    );
  }

  getSingleRecipeFromDB(){

  }

  insertRecipeToDB(reqObj){
    return this.http.post(environment.API_URL+constants.INSERT_RECIPES, reqObj,this.httpOptions).pipe(
      map(result => this.extractDataFromApiResult(result)),
      catchError(error => this.handleError(error))
    );
  }

  updateRecipe(reqObj){
    return this.http.post(environment.API_URL+constants.UPDATE_RECIPE, reqObj,this.httpOptions).pipe(
      map(result => this.extractDataFromApiResult(result)),
      catchError(error => this.handleError(error))
    );
  }

  extractDataFromApiResult(value: any){
    return value.data as Array<any>;
  }

  handleError(error: any): any {
    console.log('error',error);
  }

}
