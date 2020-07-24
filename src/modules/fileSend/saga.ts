import { all, fork, takeLatest, put, call } from 'redux-saga/effects';
import api from 'common/api';

import { send } from './actions';
import { FilePayload as TFilePayload } from './types';

function getFileSendApi(payload: TFilePayload) {
  const form = new FormData();
  form.append('patchFile', payload.file);
  return api({
    url: '/api/admin/patch',
    method: 'post',
    data: form,
  });
}

function* requestFileSend(action: ReturnType<typeof send.request>) {
  try {
    const response = yield call(getFileSendApi, action.payload);
    console.log(response);

    window.alert('The file was sent successfully.');
  } catch (e) {
    window.alert('Failed to send the file.');
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* watchFileSend() {
  yield takeLatest(send.request, requestFileSend);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* fileSendSaga() {
  yield all([fork(watchFileSend)]);
}
