import {Store} from "../app/app.store";
import {Injectable} from "@angular/core";

export const LOGIN         = 'LOGIN';
export const LOGOUT        = 'REMOVE_ITEM';
export const PENDING       = 'PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR   = 'LOGIN_ERROR';

@Injectable()
export class UserActions {

  private _store:Store;

  constructor(store:Store) {
    this._store = store;
  }

  login(user){
     this._store.dispatch({
       type: LOGIN,
       payload: user
     })
  }

  logput(){
    this._store.dispatch({
      type: LOGOUT
    })
  }


}