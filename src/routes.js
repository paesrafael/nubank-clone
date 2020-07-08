import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Main from '~/pages/Main'

const Stack = createStackNavigator()

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  )
}
