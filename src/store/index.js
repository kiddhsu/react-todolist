import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

import todoReducer from '../reducer/todolist';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  todoReducer,
  applyMiddleware(sagaMiddleware, logger),
);
export default store;

sagaMiddleware.run(rootSaga);
// 多個 Reducer
// 使用 combileReducer 先將 Reducer 給組合起來，再將組合後的結果送給 createStore
// import { createStore, combineReducers } from 'redux';
// import todoReducer from '../reducer/todolist';
// import otherReducer from '../reducer/other';

// const rootReducer = combineReducers({
//   todoReducer,
//   otherReducer,
// });

// const store = createStore(rootReducer);