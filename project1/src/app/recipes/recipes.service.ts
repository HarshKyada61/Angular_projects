import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';
import { Recipe } from './recipes.model';
import * as  ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    // private recipes:Recipe[] = [
    //     new Recipe("A Test recipe",
    //     "This is Simply a test",
    //     "https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/1:1/w_1600,c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg",
    //     [
    //         new Ingredients('Meat', 1),
    //         new Ingredients('French Fries', 20)
    //     ]),
    //     new Recipe("A new Test recipe",
    //     "This is Simply a test",
    //     "https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/1:1/w_1600,c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg",
    //     [
    //         new Ingredients('Buns', 2),
    //         new Ingredients('Meat', 1)
    //     ])
    // ];

    private recipes: Recipe[] = [];

    constructor(
        private store: Store<fromApp.AppState>
    ) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes.slice()[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredients[]) {
        // this.slService.addIngredients(ingredients);
        this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
