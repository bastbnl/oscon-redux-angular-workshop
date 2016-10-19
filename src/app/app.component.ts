import {Component, ViewEncapsulation} from "@angular/core";
import {Store} from "./app.store";


@Component({
  selector     : 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls    : ['../assets/bootstrap.css'],
  template     : `
    <div class="container">
      <h1 class="page-header">Redux Angular Workshop</h1>
      <list [items]="_store.state.list"></list>
    </div>        
    `,
})

export class AppComponent {

  private _store: Store;

  constructor(store: Store) {
    this._store = store;
  }
}
