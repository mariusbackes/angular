import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { routing } from "./app.routing";
import { RecipeService } from "./recipe/recipe.service";
import { HttpModule } from "@angular/http";
import { ShoppingListModule } from "./shopping-list/shoppling-list.module";
import {CoreModule} from "./core.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    ShoppingListModule,
    CoreModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
