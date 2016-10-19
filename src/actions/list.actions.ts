import {Store} from "../app/app.store";
import {Injectable} from "@angular/core";

export const ADD_ITEM    = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

@Injectable()
export class ListActions {

  private _store:Store;

  constructor(store:Store) {
    this._store = store;
  }

  addItem(title:string) {
    this._store.dispatch({
      type   : ADD_ITEM,
      payload: { title: title, done: false }
    })
  }

  removeItem(item) {
    this._store.dispatch({
      type   : REMOVE_ITEM,
      payload: item
    })
  }
}