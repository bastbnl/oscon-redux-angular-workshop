import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {provideStore} from "./app.store";
import {rootReducer} from "../reducers/root.reducer";


@NgModule({
  declarations: [AppComponent],
  providers   : [provideStore(rootReducer)],
  imports     : [BrowserModule],
  bootstrap   : [AppComponent]
})

export class AppModule {
}
