import {Component, ViewEncapsulation} from "@angular/core";
import {Store} from "./app.store";


@Component({
  selector     : 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls    : ['../assets/bootstrap.css'],
  template     : `<h1>Redux Angular Workshop</h1>`,
})

export class AppComponent {

  constructor(store:Store) {
    console.log(store.state);
  }
}
