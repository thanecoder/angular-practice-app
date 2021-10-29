import { Component, OnInit } from '@angular/core';
import { RecipeBookService } from 'src/app/services/recipe-book.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers:[RecipeBookService]
})
export class RecipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
