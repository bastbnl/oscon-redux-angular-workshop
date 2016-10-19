import {ListActions} from "./list.actions";
import {Store} from "../app/app.store";
import {UserActions} from "./user.actions";

export const ACTIONS = [
  { provide:ListActions, useFactory: store => new ListActions(store), deps:[Store] },
  { provide:UserActions, useFactory: store => new UserActions(store), deps:[Store] }
];