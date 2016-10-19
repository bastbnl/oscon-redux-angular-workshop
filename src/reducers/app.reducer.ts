import * as APP_ACTIONS from "../actions/app.actions";
import * as USER_ACTIONS from "../actions/user.actions";


export function appReducer(state = {}, action) {

  switch (action.type) {

    case APP_ACTIONS.LOADING:
    case USER_ACTIONS.PENDING:
      return Object.assign({}, state, {loading: true});

    case APP_ACTIONS.READY:
    case USER_ACTIONS.LOGIN_SUCCESS:
      return Object.assign({}, state, {loading: false});

    default:
      return state;
  }
}
