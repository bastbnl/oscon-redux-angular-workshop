import * as ACTIONS from "../actions/user.actions";

export const auth = store => next => action => {

  if (action.type === ACTIONS.LOGIN) {
    setTimeout(() => {
      next({type: ACTIONS.LOGIN_SUCCESS, payload: {name: 'nir'}})
    }, 5000);

    return next({type: ACTIONS.PENDING})
  }

  return next(action)
};