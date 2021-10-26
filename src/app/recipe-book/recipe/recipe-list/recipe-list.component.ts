import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe('A Test Recipe',"This is simple a test","https://cdn.pixabay.com/photo/2018/12/04/16/49/indian-food-3856044_960_720.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
