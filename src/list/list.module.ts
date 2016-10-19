import {NgModule} from "@angular/core";
import {ListComponent} from "./list.component";
import {ListItemComponent} from "./list-item.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [ListComponent, ListItemComponent],
  imports     : [BrowserModule],
  exports     : [ListComponent]
})

export class ListModule {}
