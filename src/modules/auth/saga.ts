import { all, fork, takeLatest, put, call } from 'redux-saga/effects';
import api from 'common/api';

import { login } from './actions';
import { LoginInfo as TLogin, Auth } from './types';
import { setAccessToken, setRefreshToken } from 'common/api/auth';
import { setApiJwt } from 'common/api/api';

function getLoginApi(payload: TLogin) {
  return api({
    url: '/auth/login',
    method: 'post',
    data: {
      password:
        'KN662JpbThH9DIyNRqNhH+NHn6IjplYYEx9otF45AvyvYduwfH/8ADfX1vVJVIKvIxZCamx3f+NgFrCC7hV2SNW4sZ8WmWfudSyBraUJUWCg2D2UaaCyKLTDIuYS3U0I/UJXj6Rky753s28wIMnYff/Dvbwhpm6CF/Nd3i9UzPSmPKY3d87LyO+LqdiEvc8UU4n22T+4KMYYx9mrxaE4iaHU/JY1oDY6y2dZzzGbbIJoZanM0zwSH3+OiQa33tYI8cisb4VDIJ/Agl7j11jHLkx7KPTxkK2TyxQCRkQUdaEeAky/Um1ltMGA0FcicWWqJaY46rBmDiHM9I8IlbMgUw==',
      username:
        '12jv+j8l5a1Y3btnTMwf94L6NilQg6xesOIdhPh0dQgbF2SCPrtb7XA9e4Kt4pcFs16WvplsxWf94OcqcrwbsAEHNyWLPEC6A3z02XnHEA9NypiqJ+9XaAVsoTkm7GoPl2dBDXqg2spbjxb2FkcQKll0HsMT80fJUlO75hhE/2bweMVtYpNvy6a521o3+72zo3HSV/DKag0l6gJWcwQUBUGoe5XxGWtJ8VCZZKH3U1Gvos/9tAbNofg+Bj2yhQFcwh/xhXWX06vxCRXnpQamS5t54BmpKX/GMDR1hPiK+5gGCkGD+DHd4sH6Uckch5T0v7ol2RZe6oTMx+SFSl61bQ==',
    },
  });
}

/**
 * @param action
 */
function* requestLogin(action: ReturnType<typeof login.request>) {
  try {
    const response: Auth = yield call(getLoginApi, action.payload);

    yield put(login.success(response));

    /** Set API Bearer token and storage */
    const { accessToken, refreshToken } = response;
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setApiJwt(accessToken);
  } catch (e) {
    yield put(login.failure({ errorCode: 0, errorMessage: 'Login failed.' }, action.handler));
  }
}

export function* watchLogin() {
  yield takeLatest(login.request, requestLogin);
}

export default function* authSaga() {
  yield all([fork(watchLogin)]);
}
