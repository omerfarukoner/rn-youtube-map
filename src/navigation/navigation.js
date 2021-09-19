import React from 'react'
import Home from '../screens/Home/Home.screen'
import Videos from '../screens/Videos/Videos.screen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          name="Videos"
          options={{ headerShown: false }}
          component={Videos}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
