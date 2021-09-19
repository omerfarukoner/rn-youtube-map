import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import styles from '../Map/styles'

const Map = ({ navigation }) => {
    const markerList = [
        {
            id: 1,
            lat: 41.8933203,
            long: 12.4829321
        },
        {
            id: 2,
            lat: 52.3727598,
            long: 4.8936041
        },
        {
            id: 3,
            lat: 41.0096334,
            long: 28.9651646
        }
    ]
    const renderMarker = () => {
        return markerList.map(data => {
            return (
                <MapView.Marker
                    key={data.id}
                    onPress={() =>
                        navigation.navigate('Videos', {
                            lat: data.lat,
                            long: data.long
                        })
                    }
                    coordinate={{
                        latitude: data.lat,
                        longitude: data.long
                    }}
                />
            )
        })
    }

    return (
        <>
            <MapView
                initialCamera={{
                    center: {
                        latitude: 41.8933203,
                        longitude: 12.4829321
                    },
                    pitch: 15,
                    heading: 0,
                    altitude: 1000,
                    zoom: 3
                }}
                provider={PROVIDER_GOOGLE}
                style={styles.mapView}>
                {renderMarker()}
            </MapView>
        </>
    )
}
export { Map }
