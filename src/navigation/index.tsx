/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CameraPreviewScreen } from '../screens/CameraPreviewScreen'
import { CameraScreen } from '../screens/CameraScreen'
import { ChatScreen, chatScreenOptions } from '../screens/ChatScreen'
import { ChatScreenIconOptions } from '../screens/ChatScreen/Component'
import { EmojiSelectScreen } from '../screens/EmojiSelectScreen'
import { ModalScreen } from '../screens/ModalScreen'
import { NotFoundScreen } from '../screens/NotFoundScreen'
import { QuestionCameraPreviewScreen } from '../screens/QuestionCameraPreviewScreen'
import { QuestionCameraScreen } from '../screens/QuestionCameraScreen'
import { QuestionScreen } from '../screens/QuestionScreen'
import {
  questionVideoPreviewOptions,
  QuestionVideoPreviewScreen,
} from '../screens/QuestionVideoPreviewScreen'
import { RequestPermissionModalScreen } from '../screens/RequestPermissionModalScreen'
import { TabOneScreen, tabOneScreenOptions } from '../screens/TabOneScreen'
import { TabTwoScreen, tabTwoScreenOptions } from '../screens/TabTwoScreen'
import {
  videoPreviewOptions,
  VideoPreviewScreen,
} from '../screens/VideoPreviewScreen'
import LinkingConfiguration from './LinkingConfiguration'
import {
  ChatStackParamList,
  RootStackParamList,
  RootTabParamList,
} from './types'

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

        <Stack.Screen
          component={RequestPermissionModalScreen}
          name="RequestPermissionModalScreen"
        />
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
      initialRouteName="Chat"
      screenOptions={{
        headerShown: false,
        // tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        component={ChatNavigation}
        name="Chat"
        options={ChatScreenIconOptions}
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

const ChatNavigator = createNativeStackNavigator<ChatStackParamList>()
const ChatNavigation = () => {
  return (
    <ChatNavigator.Navigator initialRouteName="Home">
      <ChatNavigator.Screen
        component={ChatScreen}
        name="Home"
        options={chatScreenOptions}
      />

      <ChatNavigator.Screen
        component={QuestionScreen}
        initialParams={{
          text: '僕のあだ名はモモってゆうんだ！〇〇さんは昔どんなあだ名で呼ばれてたの？一番いいあだ名だなって思った人のあだ名教えてよ！',
        }}
        name="Question"
      />

      <ChatNavigator.Group screenOptions={{ presentation: 'modal' }}>
        <ChatNavigator.Screen
          component={EmojiSelectScreen}
          name="EmojiSelect"
        />

        <ChatNavigator.Screen
          component={VideoPreviewScreen}
          name="VideoPreview"
          options={videoPreviewOptions}
        />

        <ChatNavigator.Screen
          component={QuestionVideoPreviewScreen}
          name="QuestionVideoPreview"
          options={questionVideoPreviewOptions}
        />
      </ChatNavigator.Group>

      <ChatNavigator.Screen component={CameraScreen} name="Camera" />

      <ChatNavigator.Screen
        component={CameraPreviewScreen}
        name="CameraPreview"
      />

      <ChatNavigator.Screen
        component={QuestionCameraScreen}
        name="QuestionCamera"
      />

      <ChatNavigator.Screen
        component={QuestionCameraPreviewScreen}
        name="QuestionCameraPreview"
      />
    </ChatNavigator.Navigator>
  )
}
