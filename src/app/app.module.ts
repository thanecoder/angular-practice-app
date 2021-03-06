import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoginPageComponent } from './login-page/login-page.component';
import { RecipeListComponent } from './recipe-book/recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-book/recipe/recipe-detail/recipe-detail.component';
import { NewRecipeFormComponent } from './recipe-book/new-recipe-form/new-recipe-form.component';
import { RecipeComponent } from './recipe-book/recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list/shopping-list.component';
import { ShoppingListFormComponent } from './shopping-list/shopping-list/shopping-list-form/shopping-list-form.component';
import { HeaderComponent } from './header/header.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { CdkStepperModule } from '@angular/cdk/stepper';
import {MatStepperModule} from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatChipsModule } from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UpdateRecipeComponent } from './recipe-book/recipe/update-recipe/update-recipe.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { UserSessionService } from './services/user-session.service';
import { AuthInterceptor } from './interceptor/auth-interceptor';
import { RecipeBookService } from './services/recipe-book.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent,
    ShoppingListComponent,
    ShoppingListFormComponent,
    HeaderComponent,
    NewRecipeFormComponent,
    UpdateRecipeComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    CdkStepperModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [
    UserSessionService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
