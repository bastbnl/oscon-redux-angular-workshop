import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {Store} from "./app.store";
import {ACTIONS} from "../actions/";
import {ListModule} from "../list/list.module";

@NgModule({
  declarations: [AppComponent],
  providers   : [Store, ...ACTIONS],
  imports     : [BrowserModule, ListModule],
  bootstrap   : [AppComponent]
})


export class AppModule {
}
