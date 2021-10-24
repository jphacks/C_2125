import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'native-base'
import * as React from 'react'
import { Platform } from 'react-native'
import { EditScreenInfo } from '../components/EditScreenInfo'

export const ModalScreen = () => {
  return (
    <View alignItems="center" flex={1} justifyContent="center">
      <Text fontSize={20} fontWeight="bold">
        Modal
      </Text>

      <View h="1px" my="30px" w="80%" />

      <EditScreenInfo path="/screens/ModalScreen.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}
