import { Text, View } from 'native-base'
import * as React from 'react'
import { EditScreenInfo } from '../components/EditScreenInfo'

export const TabTwoScreen = () => {
  return (
    <View alignItems="center" flex={1} justifyContent="center">
      <Text fontSize={20} fontWeight="bold">
        Tab Two
      </Text>

      <View h="1px" my="30px" w="80%" />

      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  )
}
