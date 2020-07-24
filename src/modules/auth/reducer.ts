import { createReducer, ActionType } from 'typesafe-actions';
import { Auth } from './types';
import * as actions from './actions';
import { clearTokens } from 'common/api/auth';

export type AuthAction = ActionType<typeof actions>;

const { login, logout } = actions;

export const defaultAuth: Auth = Object.freeze({
  accessToken: '',
  memberId: null,
  refreshToken: '',
  userId: '',
  userName: '',
});

/** The initial state */
const initialState: Auth = defaultAuth;

/** The reducer */
const auth = createReducer<Auth, AuthAction>(initialState)
  .handleAction(login.request, (s) => s)
  // The logic using refreshToken updates only accessToken and refreshToken;
  // So you have to merge payload into previous state.
  // Was `(state, { payload }) => payload`
  .handleAction(login.success, (state, { payload }) => {
    return { ...state, ...payload };
  })
  .handleAction(login.failure, (state, { payload, handler }) => {
    if (handler?.failure) {
      handler.failure(payload);
    }
    return state;
  })
  .handleAction(logout.request, () => {
    clearTokens();

    return defaultAuth;
  });

export default auth;
