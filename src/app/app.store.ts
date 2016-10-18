import {createStore, compose} from "redux";

export class Store {

  private _store;

  constructor() {
    this._store = createStore((state = {}) => state, compose(
        window['devToolsExtension '] && window['devToolsExtension()']
    ))
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
