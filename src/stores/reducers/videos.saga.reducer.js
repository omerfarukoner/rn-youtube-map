import {
  LOAD_VIDEOS_ERROR,
  LOAD_VIDEOS_LOADING,
  LOAD_VIDEOS_SUCCESS
} from '../actions/loadVideos'

const initialState = {
  videos: [],
  loading: false,
  error: ''
}

export default function reduxSagaReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_VIDEOS_LOADING: {
      return {
        ...state,
        loading: true,
        error: ''
      }
    }
    case LOAD_VIDEOS_SUCCESS: {
      return {
        ...state,
        videos: action.data,
        loading: false
      }
    }
    case LOAD_VIDEOS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      }
    }
    default: {
      return state
    }
  }
}
