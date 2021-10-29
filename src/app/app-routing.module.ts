import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRecipeFormComponent } from './recipe-book/new-recipe-form/new-recipe-form.component';
import { RecipeDetailComponent } from './recipe-book/recipe/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './recipe-book/recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list/shopping-list.component';

const routes: Routes = [
  { path: 'recipebook', component: RecipeComponent, children:
    [
        // {path: 'details/:id', component: RecipeDetailComponent,},
        // {path: 'form', component: RecipeFormComponent},
    ]
  },
  { path: 'newrecipe', component: NewRecipeFormComponent },
  { path: 'shoppinglist', component: ShoppingListComponent },
  { path: '',   redirectTo: '/recipebook', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
