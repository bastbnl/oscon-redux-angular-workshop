import {createStore, compose} from "redux";

export class Store {

  private _store;

  constructor(reducer) {
    this._store = createStore(reducer, compose(
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

export function provideStore(reducer) {
  return {
    provide   : Store,
    useFactory: () => new Store(reducer)
  }
}