import {ListActions} from "../actions/list.actions";
import {Component, ChangeDetectionStrategy, Input} from "@angular/core";

@Component({
  selector       : 'list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template       : `                 
        <div class="form-group">          
          <input class="form-control" placeholder="add item..." #item>
        </div>
        
        <div class="form-group">
          <button class="btn btn-primary" (click)="_actions.addItem(item.value)">Add</button>
         </div>
     
     <ul class="list-group">
      <list-item class="list-group-item"       
                 *ngFor="let item of items"
                 [item]="item">                
      </list-item>    
    </ul>             
  `
})


export class ListComponent {

  @Input()
  private items:any[];
  private _actions:ListActions;

  constructor(actions:ListActions) {
    this._actions = actions;
  }
}