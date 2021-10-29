import { Button, Text, View } from 'native-base'
import React, { useCallback, useState } from 'react'
import EmojiSelector from 'react-native-emoji-selector'

type ComponentProps = {
  onSubmitEmoji: (emoji: string) => unknown
}

export const Component = ({ onSubmitEmoji }: ComponentProps) => {
  const [emoji, setEmoji] = useState<string | null>(null)

  const handlePressEmoji = useCallback(() => {
    if (emoji) {
      return onSubmitEmoji(emoji)
    }
  }, [onSubmitEmoji, emoji])

  return (
    <View alignItems="center" height="100%">
      {emoji && (
        <>
          <Button
            _text={{
              fontSize: '9xl',
            }}
            colorScheme="gray"
            onPress={handlePressEmoji}
            variant="ghost"
          >
            {emoji}
          </Button>

          <Text>絵文字をタップで送信</Text>
        </>
      )}

      <EmojiSelector onEmojiSelected={setEmoji} />
    </View>
  )
}
