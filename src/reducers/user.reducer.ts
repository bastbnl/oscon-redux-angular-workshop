import * as ACTIONS from "../actions/user.actions";

export function userReducer(state = {}, action) {

  switch (action.type) {

    case ACTIONS.PENDING:
      return Object.assign({}, state, { pending: true });

    case ACTIONS.LOGIN_SUCCESS:
      return Object.assign({}, state, { pending: false, user: action.payload });

    case ACTIONS.LOGIN_ERROR:
      return Object.assign({}, state, { pending: false, error: action.payload });

    default:
      return state;
  }
}
