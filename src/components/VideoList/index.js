import React, { useState } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import styles from './styles'
import { VideoItem } from '../../components'
import { ActivityIndicator } from 'react-native'
import { FlatList, Text } from 'react-native'
const VideoList = ({ videos, loadMore, loadingMore }) => {
    const renderFooter = () => {
        if (videos && loadingMore) {
            return <ActivityIndicator style={styles.indicator} color={'gray'} />
        } else {
            return null
        }
    }

    return (
        <FlatList
            style={styles.container}
            keyExtractor={item => `${item.snippet.publishTime}`}
            data={videos}
            ListFooterComponent={renderFooter}
            renderItem={({ item }) => <VideoItem item={item} />}
            onEndReached={loadMore}
        />
    )
}
export { VideoList }
