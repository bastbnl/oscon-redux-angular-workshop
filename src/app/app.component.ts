import {Component} from '@angular/core';
import {Store} from "./app.store";


@Component({
  selector   : 'app',
  template: `<h1>Redux Angular Workshop</h1>`,
})

export class AppComponent {

  constructor(store: Store) {
    console.log(store.state);
  }
}
