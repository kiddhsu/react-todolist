import { all } from 'redux-saga/effects';
import toodlistSaga from '../action/todolist';

function* rootSaga() {
  // 目前僅有一個但如果有多個的話，只需要再 all 的陣列中添加新 Saga 即可
  yield all([
    toodlistSaga(),
  ]);
}

export default rootSaga;