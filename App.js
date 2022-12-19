import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import ChatStackNavigator from './src/navigations/Navigator'

const App = () => {
  return (
    <NavigationContainer>
      <ChatStackNavigator />
    </NavigationContainer>
  )
}

export default App
