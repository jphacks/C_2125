import { Text, View } from 'native-base'
import * as React from 'react'
import { EditScreenInfo } from '../components/EditScreenInfo'
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
