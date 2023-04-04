import { Component,  OnDestroy,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {


    recipes:Recipe[];
    subscription: Subscription;

    constructor(private recipeServices: RecipeService, private router: Router, private route: ActivatedRoute){}

    ngOnInit() {
      this.subscription = this.recipeServices.recipesChanged.subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      )
      this.recipes = this.recipeServices.getRecipes();
    }

    onNewRecipe(){
        this.router.navigate(['new'], {relativeTo: this.route});
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
}
