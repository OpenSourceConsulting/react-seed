import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
// browser가 밑에 작성할 config에 관해 이 store를 cache할 수 있게 접근을 허용해준다
import rootReducer from './reducers';
import rootSaga from './sagas';

// saga 미들웨어를 생성합니다.
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store as any);
export default { store, persistor };
// export default { store };
