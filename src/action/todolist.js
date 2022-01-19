import { call, put, takeEvery } from 'redux-saga/effects';

export const ADD_TODO = 'ADD_TODO';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: {
    todo,
  },
});

export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';

export const fetchDataBegin = data => ({
  type: FETCH_DATA_BEGIN,
  payload: {
    data,
  },
});

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: {
    data,
  },
});

function* fetchData() {
  // 使用 data 接收請求的資料
  const data = yield call(
    () => fetch('https://httpbin.org/get')
      .then(response => response.json()),
  );
  yield put(fetchDataSuccess(data));
}
function* mySaga() {
  // 訂閱事件統一到一個 Function 中，管理一種 Redcuer 的 State
  yield takeEvery(FETCH_DATA_BEGIN, fetchData);
}

export default mySaga;