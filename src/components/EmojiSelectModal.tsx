import EmojiSelector from 'react-native-emoji-selector'
import { useState, useCallback } from 'react'
import { Box, Text, Button, Modal, HStack } from 'native-base'

// https://docs.nativebase.io/modal

type EmojiSelectModalProps = {
  isOpen: boolean
  onClose: () => unknown
  onSelectEmoji: (emoji: string) => unknown
}

export const EmojiSelectModal = ({
  isOpen,
  onClose,
  onSelectEmoji,
}: EmojiSelectModalProps) => {
  const [emoji, setEmoji] = useState<null | string>(null)

  const handleSelectEmoji = useCallback(() => {
    if (emoji === null) return
    onSelectEmoji(emoji)
    onClose()
  }, [onSelectEmoji, emoji])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>絵文字をせんたくする</Modal.Header>
        <Modal.Body>
          <HStack>
            <Text fontSize="xl">{emoji}</Text>
            <Button onPress={handleSelectEmoji} isDisabled={emoji === null}>
              確定
            </Button>
          </HStack>
          <EmojiSelector onEmojiSelected={setEmoji} />
        </Modal.Body>
      </Modal.Content>
    </Modal>
  )
}
