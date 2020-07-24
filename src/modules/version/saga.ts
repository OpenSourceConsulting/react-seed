import { all, fork, takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { API_BASE_URL, setBaseUrl } from 'common/api/api';
import ApiFailure from 'common/types/ApiFailure';
import { getVersion } from './actions';
import { Version } from '.';

// get version start
function getVersionApi(baseUrl: string) {
  // return axios({
  //   url: `${baseUrl}/auth/version`,
  //   method: 'get',
  // });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          data: {
            applicationVersion: '1.3.0',
          },
        },
      });
    }, 500);
  });
}

function* versionRequest(action: ReturnType<typeof getVersion.request>) {
  try {
    let version;
    let contextPath;

    if (API_BASE_URL) {
      version = yield call(getVersionApi, API_BASE_URL);
      contextPath = '';
    } else {
      const pathnameMatch = window.location.pathname.match(/^\/[^/]*/g);
      contextPath = pathnameMatch && pathnameMatch[0] !== '/' ? pathnameMatch[0] : '';

      // App loading 시 초기에 version 정보를 확인하여 context path 여부를 파악한다.
      try {
        const baseUrl = `//${window.location.hostname}${contextPath}`;
        version = yield call(getVersionApi, baseUrl);
        setBaseUrl(baseUrl);
      } catch (error) {
        if (contextPath) {
          const baseUrl = `//${window.location.hostname}`;
          version = yield call(getVersionApi, baseUrl);
          setBaseUrl(baseUrl);
        }
      }
    }

    yield put(getVersion.success({ ...version.data.data, contextPath }, action.handler));
  } catch (error) {
    yield put(getVersion.failure(error as ApiFailure));
  }
}

export function* watchVersion(): Generator {
  yield takeLatest(getVersion.request, versionRequest);
}
// get version end

export default function* versionsSaga(): Generator {
  yield all([fork(watchVersion)]);
}
