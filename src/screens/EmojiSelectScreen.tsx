import { Text, View } from 'native-base'
import React, { useState } from 'react'
import EmojiSelector from 'react-native-emoji-selector'
import { ChatStackScreenProps } from '../navigation/types'

export const EmojiSelectScreen = ({
  navigation,
  route,
}: ChatStackScreenProps<'Question'>) => {
  const [em, setEm] = useState(' ')
  return (
    <View alignItems="center" height="100%">
      <Text fontSize="9xl">{em}</Text>

      <EmojiSelector onEmojiSelected={setEm} />
    </View>
  )
}
