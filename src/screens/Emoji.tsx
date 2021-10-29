import { Text, View } from 'native-base'
import React, { useState } from 'react'
import EmojiSelector from 'react-native-emoji-selector'
import { ChatStackScreenProps } from '../navigation/types'

export const Emoji = ({
  navigation,
  route,
}: ChatStackScreenProps<'Question'>) => {
  const [em, setEm] = useState(' ')
  return (
    <View height="100%" alignItems="center">
      <Text fontSize="9xl">{em}</Text>
      <EmojiSelector
        onEmojiSelected={(emoji) => {
          setEm(emoji)
        }}
      />
    </View>
  )
}
