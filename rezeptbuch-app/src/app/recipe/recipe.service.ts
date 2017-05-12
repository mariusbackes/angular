import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter, Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();

  constructor(private http: Http) { }

  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'Sehr lecker',
      'http://www.gasthof-lang.de/wp-content/gallery/blick-in-die-kueche/schnitzel.jpg',
      [
        new Ingredient('Pommes', 10),
        new Ingredient('Schnitzel', 1)
      ]),
    new Recipe('Salat', 'Auch lecker', 'https://d1d8i24om29pt.cloudfront.net/static/desktop/products/salat-korfu.png', [])
  ];

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('https://ng2-de-http-ca17d.firebaseio.com/recipe.json', body, {headers: headers});
  }

  fetchData() {
    this.http.get('https://ng2-de-http-ca17d.firebaseio.com/recipe.json')
        .map((response: Response) => response.json())
        .subscribe(
            (recipes: Recipe[]) => {
              this.recipes = recipes;
              this.recipesChanged.emit(this.recipes);
            }
        )
  }
}
