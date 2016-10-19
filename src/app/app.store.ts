import {createStore, compose, combineReducers} from "redux";
import {rootReducer} from '../reducers/';
import {Injectable} from "@angular/core";

@Injectable()
export class Store {

  private _store;

  constructor() {
    //noinspection TypeScriptUnresolvedVariable,TypeScriptUnresolvedFunction
    this._store = createStore(
        rootReducer,
        compose(window.devToolsExtension  && window.devToolsExtension()))
  }

  get state() {
    return this._store.getState();
  }

  dispatch(action) {
    this._store.dispatch(action);
  }

  subscribe(listener) {
    return this._store.subscribe(listener);
  }
}
