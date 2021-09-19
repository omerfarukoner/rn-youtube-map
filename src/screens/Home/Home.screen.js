import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import styles from './Home.style'

import { Map } from '../../components'

const Home = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <Map navigation={navigation} />
      </SafeAreaView>
    </>
  )
}

export default Home
