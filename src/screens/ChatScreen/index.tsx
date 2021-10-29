import { FontAwesome } from '@expo/vector-icons'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { Pressable } from 'native-base'
import { useCallback } from 'react'
import { PressableStateCallbackType } from 'react-native'
import { ChatStackScreenProps } from '../../navigation/types'
import { Component } from './Component'
import { useChatScreen } from './hooks'

export const ChatScreen = ({ navigation }: ChatStackScreenProps<'Home'>) => {
  const { testValue } = useChatScreen()

  const goToEmojiSelect = useCallback(() => {
    navigation.push('EmojiSelect')
  }, [navigation])

  const goToCameraScreen = useCallback(() => {
    navigation.push('Camera')
  }, [navigation])

  return (
    <Component
      onPressCamera={goToCameraScreen}
      onPressEmojiSelect={goToEmojiSelect}
      testValue={testValue}
    />
  )
}

const HeaderRight = ({ navigation }: ChatStackScreenProps<'Home'>) => {
  const handlePress = useCallback(() => {
    return navigation.navigate('Modal')
  }, [navigation])

  const style = useCallback(
    ({ pressed }: PressableStateCallbackType) => ({
      opacity: pressed ? 0.5 : 1,
    }),
    [],
  )

  return (
    <Pressable onPress={handlePress} style={style}>
      <FontAwesome
        // color={Colors[colorScheme].text}
        name="info-circle"
        size={25}
        style={{ marginRight: 15 }}
      />
    </Pressable>
  )
}

export const chatScreenOptions = (
  props: ChatStackScreenProps<'Home'>,
): NativeStackNavigationOptions => ({
  headerRight: () => <HeaderRight {...props} />,
  title: 'Chat',
})
