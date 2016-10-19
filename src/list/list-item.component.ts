import {ListActions} from "../actions/list.actions";
import {Input, Component, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: 'list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:`
    <li class="list-group-item">{{ item.title }}
      <span (click)="_actions.removeItem(item)" class="close">x</span>
    </li>
    `
})

export class ListItemComponent {

  @Input()
  private item: any;

  private _actions:ListActions;

  constructor(actions:ListActions) {
    this._actions = actions;
  }

}