import { FontAwesome } from '@expo/vector-icons'
import { Pressable } from 'native-base'
import { useCallback } from 'react'
import { PressableStateCallbackType } from 'react-native'
import { TabBarIcon } from '../../components/TabBarIcon'
import { RootTabScreenProps } from '../../navigation/types'
import { Component } from './Component'
import { useChatScreen } from './hooks'

export const ChatScreen = () => {
  const { testValue } = useChatScreen()

  return <Component testValue={testValue} />
}

const HeaderRight = ({ navigation }: RootTabScreenProps<'Chat'>) => {
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

export const chatScreenOptions = (props: RootTabScreenProps<'Chat'>) => ({
  headerRight: () => <HeaderRight {...props} />,
  tabBarIcon: ({ color }: { color: string }) => (
    <TabBarIcon color={color} name="code" />
  ),
  title: 'Chat',
})
