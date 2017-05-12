import {NgModule} from "@angular/core";
import {RecipeComponent} from "./recipe.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeStartComponent} from "./recipe-start.component";
import {ReactiveFormsModule} from "@angular/forms";
import {recipeRouting} from "./recipe.routing";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        RecipeComponent,
        RecipeDetailComponent,
        RecipeEditComponent,
        RecipeItemComponent,
        RecipeListComponent,
        RecipeStartComponent
    ],
    imports: [
        ReactiveFormsModule,
        recipeRouting,
        SharedModule
    ]
})

export class RecipeModule { }