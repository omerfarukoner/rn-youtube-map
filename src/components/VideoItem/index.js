import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import styles from './styles'

import { Text, View, Image } from 'react-native'

const VideoItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: item.snippet.thumbnails.default.url
                }}
                style={styles.image}
            />

            <Text style={styles.text}>
                {console.log('--', item.snippet)}
                {item.snippet.title}
            </Text>
        </View>
    )
}
export { VideoItem }
