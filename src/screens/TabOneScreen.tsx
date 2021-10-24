import { Text, View } from 'native-base'
import * as React from 'react'
import { EditScreenInfo } from '../components/EditScreenInfo'
import { RootTabScreenProps } from '../navigation/types'

export const TabOneScreen = ({ navigation }: RootTabScreenProps<'TabOne'>) => {
  return (
    <View alignItems="center" flex={1} justifyContent="center">
      <Text fontSize={20} fontWeight="bold">
        tomokazuです
      </Text>

      <View h="1px" my="30px" w="80%" />

      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  )
}
