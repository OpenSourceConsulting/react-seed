import { all, fork } from 'redux-saga/effects';

import todosSaga from './todos/saga';
import authSaga from './auth/saga';
import fileSend from './fileSend/saga';
import version from './version/saga';

export default function* rootSaga(): Generator {
  yield all([
    /** todos */
    fork(todosSaga),
    fork(authSaga),
    fork(fileSend),
    fork(version),
  ]);
}
