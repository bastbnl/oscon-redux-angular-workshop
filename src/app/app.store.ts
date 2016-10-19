import {createStore, compose, applyMiddleware} from "redux";
import {rootReducer} from "../reducers/";
import {Injectable} from "@angular/core";
import {auth} from "../middlewars/auth";

@Injectable()
export class Store {

  private _store;

  constructor() {
    //noinspection TypeScriptUnresolvedVariable,TypeScriptUnresolvedFunction,TypeScriptValidateTypes
    this._store = createStore(
        rootReducer,
        compose(
            applyMiddleware(auth),
            window.devToolsExtension && window.devToolsExtension())
    )
  }

  get state() {
    return this._store.getState();
  }

  dispatch(action) {
    this._store.dispatch(action);
  }
}
