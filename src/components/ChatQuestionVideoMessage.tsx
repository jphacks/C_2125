import { Text } from 'native-base'
import { useCallback } from 'react'
import { ChatItemQuestionVideo } from '../entities/chat'
import { FirebaseVideoThumbnail } from './FirebaseVideoThumbnail'

type ChatQuestionVideoMessageProps = {
  item: ChatItemQuestionVideo
  onPress?: (path: string, text: string) => unknown
}

export const ChatQuestionVideoMessage = ({
  item,
  onPress,
}: ChatQuestionVideoMessageProps) => {
  const handlePress = useCallback(
    (path: string) => {
      return onPress?.(path, item.text)
    },
    [item.text, onPress],
  )

  return (
    <>
      <Text color="gray.100" fontSize="xl" numberOfLines={1} py="1">
        {item.text}
      </Text>

      <FirebaseVideoThumbnail
        maxH="64"
        maxW="64"
        onPress={handlePress}
        overflow="hidden"
        path={item.path}
        rounded="2xl"
      />
    </>
  )
}
