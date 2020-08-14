import { all } from 'redux-saga/effects'
import { watchFetchPostsSaga } from '../../pages/Feed'

function* rootSaga() {
  yield all([watchFetchPostsSaga()])
}

export default rootSaga