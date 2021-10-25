import { FontAwesome } from '@expo/vector-icons'
import { Pressable, Text, View } from 'native-base'
import React, { useCallback } from 'react'
import { PressableStateCallbackType } from 'react-native'
import { EditScreenInfo } from '../components/EditScreenInfo'
import { TabBarIcon } from '../components/TabBarIcon'
import { RootTabScreenProps } from '../navigation/types'

export const ChatScreen = ({ navigation }: RootTabScreenProps<'Chat'>) => {
  return (
    <View alignItems="center" flex={1} justifyContent="center">
      <Text fontSize={20} fontWeight="bold">
        Chat Screen です
      </Text>

      <View h="1px" my="30px" w="80%" />

      <EditScreenInfo path="/screens/ChatScreen.tsx" />
    </View>
  )
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
