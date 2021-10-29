import { Button, HStack, Modal, Text } from 'native-base'
import { useCallback, useState } from 'react'
import EmojiSelector from 'react-native-emoji-selector'

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
  }, [emoji, onSelectEmoji, onClose])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content>
        <Modal.CloseButton />

        <Modal.Header>絵文字をせんたくする</Modal.Header>

        <Modal.Body>
          <HStack>
            <Text fontSize="xl">{emoji}</Text>

            <Button isDisabled={emoji === null} onPress={handleSelectEmoji}>
              確定
            </Button>
          </HStack>

          <EmojiSelector onEmojiSelected={setEmoji} />
        </Modal.Body>
      </Modal.Content>
    </Modal>
  )
}
