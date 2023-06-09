import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';

import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromApp from '../store/app.reducer'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Observable<{ingredients: Ingredients[]}> ;
    private subscription: Subscription;

    constructor(private store:Store<fromApp.AppState>){}

    ngOnInit(){
      this.ingredients = this.store.select('shoppingList');
      
      // this.ingredients = this.slService.getIngredients();
      // this.idChangeSub = this.slService.ingredientChanged.subscribe(
      //   (ingredients: Ingredients[]) => {
      //     this.ingredients = ingredients; 
      //   }
      // );
    }

    onEditItems(index: number){
      // this.slService.startedEditing.next(index);
      this.store.dispatch(new ShoppingListActions.StartEdit(index));

    }

    ngOnDestroy(){
      // this.idChangeSub.unsubscribe();
    }
}
