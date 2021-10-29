import { format } from 'date-fns'
import { Avatar, Box, HStack, Text } from 'native-base'
import { ChatItem } from '../entities/chat'
import { ja } from '../lib/date-fns-locale'
import { ChatVideoMessage } from './ChatVideoMessage'

export type ChatMessageProps = {
  id: string
  username: string
  userAvatarUrl: string
  createdAt: Date
  item: ChatItem
  onPressVideo?: (path: string) => unknown
}

export const ChatMessage = ({
  item,
  userAvatarUrl,
  username,
  createdAt,
  onPressVideo,
}: ChatMessageProps) => {
  return (
    <Box>
      <HStack space="1">
        <Avatar
          size="6"
          source={{
            uri: userAvatarUrl,
          }}
        />

        <Text alignSelf="flex-end" color="white" fontSize="xl">
          {username}
        </Text>

        <Text alignSelf="flex-end" color="white">
          {format(createdAt, 'hh:mm', { locale: ja })}
        </Text>
      </HStack>

      {item.type === 'video' ? (
        <Box px="7">
          <ChatVideoMessage item={item} onPress={onPressVideo} />
        </Box>
      ) : item.type === 'emoji' ? (
        <Box>
          <Text fontSize="7xl" p="3">
            {item.emoji}
          </Text>
        </Box>
      ) : null}
    </Box>
  )
}
