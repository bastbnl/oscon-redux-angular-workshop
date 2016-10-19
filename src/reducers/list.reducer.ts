import * as ACTIONS from "../actions/list.actions";

export function listReducer(state = [], action) {

  switch (action.type) {

    case ACTIONS.ADD_ITEM:
      return [...state, action.payload];

    case ACTIONS.REMOVE_ITEM:
      const index = state.indexOf(action.payload);

      return state.slice(0, index)
          .concat(state.slice(index + 1));

    default:
      return state;
  }
}
