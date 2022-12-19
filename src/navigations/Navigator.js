import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home'
import Discussion from '../screens/Discussion'
import Profile from '../screens/Profile'
import Chat from '../screens/Chat'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {exp} from 'react-native/Libraries/Animated/Easing'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f2404c',
        tabBarInactiveTintColor: '#000119',
        tabBarStyle: {
          height: 65,
          justifyContent: 'center',
          paddingVertical: 15,
          backgroundColor: '#fff',
          elevation: 2,
        },
      }}>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Ionicons name='planet-outline' color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name='Chat'
        component={Chat}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Ionicons name='chatbubbles-outline' color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Ionicons name='person-outline' color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator()
const screenOptionStyle = {
  headerShown: false,
}

const ChatStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name='Chat' component={BottomTabNavigator} />
      <Stack.Screen name='Discussion' component={Discussion} />
    </Stack.Navigator>
  )
}

export default ChatStackNavigator
