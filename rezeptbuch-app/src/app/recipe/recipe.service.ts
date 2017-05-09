import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
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
}
