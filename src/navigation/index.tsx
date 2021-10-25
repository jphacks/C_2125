/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { chatScreenOptions } from '../screens/ChatScreen'
import { ModalScreen } from '../screens/ModalScreen'
import { NotFoundScreen } from '../screens/NotFoundScreen'
import { TabOneScreen, tabOneScreenOptions } from '../screens/TabOneScreen'
import { TabTwoScreen, tabTwoScreenOptions } from '../screens/TabTwoScreen'
import LinkingConfiguration from './LinkingConfiguration'
import { RootStackParamList, RootTabParamList } from './types'

export const Navigation = () => {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  )
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={BottomTabNavigator}
        name="Root"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        component={NotFoundScreen}
        name="NotFound"
        options={{ title: 'Oops!' }}
      />

      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen component={ModalScreen} name="Modal" />
      </Stack.Group>
    </Stack.Navigator>
  )
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>()

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={
        {
          // tabBarActiveTintColor: Colors[colorScheme].tint,
        }
      }
    >
      <BottomTab.Screen
        component={TabOneScreen}
        name="Chat"
        options={chatScreenOptions}
      />

      <BottomTab.Screen
        component={TabOneScreen}
        name="TabOne"
        options={tabOneScreenOptions}
      />

      <BottomTab.Screen
        component={TabTwoScreen}
        name="TabTwo"
        options={tabTwoScreenOptions}
      />
    </BottomTab.Navigator>
  )
}
