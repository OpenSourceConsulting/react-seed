import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// reducer를 persist할 수 있게 해주는 persistReducer import
import storage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/lib/storage/session';

import todos from './todos';
import auth from './auth';
import fileSend from './fileSend';
import version from './version';

const persistConfig = {
  // 새로운 persist config를 선언해준다.
  key: 'root',
  // reducer 객체의 어느 지점에서 부터 데이터를 저장할 것인지 설정해주는것이 key이다.
  // root부터 시작한다고 지정해준다.
  storage: storage,
  // 위에 import 한 성격의 storage를 지정해준다. 이 예제의 경우에는 localstorage
  // eslint-disable-next-line prettier/prettier
  whitelist: [],
  // 유지 및 보존하고 싶은 데이터를 배열안에 지정해준다.
  // string 형태이고 아래 combineReducers에 지정된 값들을 사용해주면 된다.
};

/** Auth redux store persisted in sessionStorage */
const authPersistConfig = {
  key: 'auth',
  storage: sessionStorage,
};

const rootReducer = combineReducers({
  todos,
  auth: persistReducer(authPersistConfig, auth),
  fileSend,
  version,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
