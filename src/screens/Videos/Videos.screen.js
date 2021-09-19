import React, { useState, useEffect } from 'react'
import { SafeAreaView, View } from 'react-native'
import styles from './Videos.style'

import { connect, useDispatch, useSelector } from 'react-redux'
import { loadVideos } from '../../stores/actions/loadVideos'

import { VideoList } from '../../components'

const Home = ({ route, navigation }) => {
  const videos = useSelector(state => state.videosReducerSaga.videos)
  const isLoading = useSelector(state => state.videosReducerSaga.loading)

  const dispatch = useDispatch()
  const [resultLimit, setLimit] = useState(10)
  const { lat, long } = route.params

  useEffect(() => {
    fetch()
  }, [resultLimit])

  const loadMore = () => {
    setLimit(resultLimit + 10)
    const params = {
      lat: lat,
      long: long,
      maxResults: resultLimit
    }
    dispatch(loadVideos(params))
  }
  const fetch = () => {
    const params = {
      lat: lat,
      long: long,
      maxResults: resultLimit
    }
    dispatch(loadVideos(params))
  }

  return (
    <SafeAreaView style={styles.SafeAreaView2}>
      <View style={styles.outerWrapper}>
        <View>
          <VideoList
            videos={videos}
            loadMore={loadMore}
            loadingMore={isLoading}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default connect(null, null)(Home)
