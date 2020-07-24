import { createReducer, ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type FileSendAction = ActionType<typeof actions>;

const { send } = actions;

/** The initial state */
const initialState = {};

/** The reducer */
const fileSend = createReducer<typeof initialState, FileSendAction>(initialState)
  .handleAction(send.request, (s) => s)
  .handleAction(send.success, (state) => state)
  .handleAction(send.failure, (state) => state);

export default fileSend;
