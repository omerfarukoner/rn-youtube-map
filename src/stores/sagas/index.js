// Imports: Dependencies
import { all, fork } from 'redux-saga/effects'

import { videosSaga } from './videos.saga'
// Redux Saga: Root Saga
export function* rootSaga() {
    yield all([fork(videosSaga)])
}
