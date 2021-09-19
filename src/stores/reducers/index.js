import { combineReducers } from 'redux'
import videosReducerSaga from './videos.saga.reducer'
//insert another reducers here to be combined

const reducers = combineReducers({
  videosReducerSaga
})

export default reducers
