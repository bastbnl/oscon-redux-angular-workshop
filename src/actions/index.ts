import {ListActions} from "./list.actions";
import {Store} from "../app/app.store";

export const ACTIONS = [
  { provide:ListActions, useFactory: store => new ListActions(store), deps:[Store] }
];