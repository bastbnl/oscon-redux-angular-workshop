import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {Store} from "./app.store";
import {ACTIONS} from "../actions/";
import {ListModule} from "../list/list.module";
import {LoginModule} from "../login/login.module";

@NgModule({
  declarations: [AppComponent],
  providers   : [Store, ...ACTIONS],
  imports     : [BrowserModule, ListModule, LoginModule],
  bootstrap   : [AppComponent]
})


export class AppModule {
}
