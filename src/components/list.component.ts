import {ListActions} from "../actions/list.actions";
import {Store} from "../app/app.store";
import {Component} from "@angular/core";

@Component({
  selector: 'list',
  template: `
    <div class="container">      
       
        <div class="form-group">          
          <input class="form-control" placeholder="add item..." #item>
        </div>
        
        <div class="form-group">
          <button class="btn btn-primary" (click)="_actions.addItem(item.value)">Add</button>
         </div>
     
     <ul class="list-group">
      <li class="list-group-item"       
          *ngFor="let item of _store.state.list">{{ item.title }}
      <span  (click)="_actions.removeItem(item)" class="close">x</span>          
      </li>    
    </ul>
     
    </div>    
  `
})


export class ListComponent {

  private _store:Store;
  private _actions:ListActions;

  constructor(store:Store, actions:ListActions) {
    this._store   = store;
    this._actions = actions;
  }
}