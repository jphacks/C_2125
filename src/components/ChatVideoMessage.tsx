import { ChatItemVideo } from '../entities/chat'
import { FirebaseVideoThumbnail } from './FirebaseVideoThumbnail'

type ChatVideoMessageProps = {
  item: ChatItemVideo
  onPress?: (path: string) => unknown
}

export const ChatVideoMessage = ({ item, onPress }: ChatVideoMessageProps) => {
  return (
    <FirebaseVideoThumbnail
      maxH="64"
      maxW="64"
      onPress={onPress}
      overflow="hidden"
      path={item.path}
      rounded="2xl"
    />
  )
}
