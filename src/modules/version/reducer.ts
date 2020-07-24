import { createReducer, ActionType } from 'typesafe-actions';
import { Version } from './types';
import * as actions from './actions';

export type VersionAction = ActionType<typeof actions>;

const { getVersion } = actions;

// 초기값 설정
const initialState: Version = {
  applicationVersion: '',
  contextPath: '',
};

// CRUD handlers
const version = createReducer<Version, VersionAction>(initialState)
  .handleAction(getVersion.success, (state, { payload, handler }) => {
    if (handler?.success) {
      handler.success(payload);
    }
    return payload;
  })
  .handleAction(getVersion.failure, (state, { payload, handler }) => {
    if (handler?.failure) {
      handler.failure(payload);
    }
    return state;
  });

export default version;
