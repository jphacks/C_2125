/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { ColorSchemeName, Pressable } from 'react-native'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import { ModalScreen } from '../screens/ModalScreen'
import { NotFoundScreen } from '../screens/NotFoundScreen'
import { TabOneScreen } from '../screens/TabOneScreen'
import { TabTwoScreen } from '../screens/TabTwoScreen'
import LinkingConfiguration from './LinkingConfiguration'
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from './types'

export const Navigation = ({
  colorScheme,
}: {
  colorScheme: ColorSchemeName
}) => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
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
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        component={TabOneScreen}
        name="Chat"
        options={React.useCallback(
          ({ navigation }: RootTabScreenProps<'Chat'>) => ({
            // eslint-disable-next-line react/no-unstable-nested-components
            headerRight: () => (
              <Pressable
                // eslint-disable-next-line react/jsx-no-bind
                onPress={() => navigation.navigate('Modal')}
                // eslint-disable-next-line react/jsx-no-bind
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <FontAwesome
                  color={Colors[colorScheme].text}
                  name="info-circle"
                  size={25}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            ),
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: (props: { color: string }) => (
              <TabBarIcon {...props} name="code" />
            ),
            title: 'Chat',
          }),
          [colorScheme],
        )}
      />

      <BottomTab.Screen
        component={TabOneScreen}
        name="TabOne"
        // eslint-disable-next-line react/jsx-no-bind
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => (
            <Pressable
              // eslint-disable-next-line react/jsx-no-bind
              onPress={() => navigation.navigate('Modal')}
              // eslint-disable-next-line react/jsx-no-bind
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                color={Colors[colorScheme].text}
                name="info-circle"
                size={25}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => <TabBarIcon color={color} name="code" />,
          title: 'Tab One',
        })}
      />

      <BottomTab.Screen
        component={TabTwoScreen}
        name="TabTwo"
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => <TabBarIcon color={color} name="code" />,
          title: 'Tab Two',
        }}
      />
    </BottomTab.Navigator>
  )
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>['name']
  color: string
}) => {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
}
