export const LOAD_VIDEOS_LOADING = 'REDUX_SAGA_LOAD_VIDEOS_LOADING'
export const LOAD_VIDEOS_SUCCESS = 'REDUX_SAGA_LOAD_VIDEOS_SUCCESS'
export const LOAD_VIDEOS_ERROR = 'REDUX_SAGA_LOAD_VIDEOS_ERROR'

export const loadVideos = params => dispatch => {
  dispatch({ type: LOAD_VIDEOS_LOADING, params })
}
