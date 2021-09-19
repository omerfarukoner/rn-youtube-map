import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
    LOAD_VIDEOS_ERROR,
    LOAD_VIDEOS_LOADING,
    LOAD_VIDEOS_SUCCESS
} from '../actions/loadVideos'
import Api from '../../api/api'

async function fetchAsync(func, params) {
    const { lat, long, maxResults } = params.params

    const response = await func(lat, long, maxResults)
    // console.log('response', response)
    if (response.ok) {
        return await response.json()
    }

    throw new Error('Unexpected error!!!')
}

function* fetchVideos(params) {
    try {
        const videos = yield fetchAsync(Api.getVideos, params)
        yield put({ type: LOAD_VIDEOS_SUCCESS, data: videos.items })
    } catch (e) {
        yield put({ type: LOAD_VIDEOS_ERROR, error: e.message })
    }
}

export function* videosSaga() {
    // yield takeEvery(LOAD_VIDEOS_LOADING, fetchVideos)

    yield takeLatest(LOAD_VIDEOS_LOADING, fetchVideos)
}

