import { format } from 'date-fns'
import { Avatar, Box, HStack, Text } from 'native-base'
import { ChatItem } from '../entities/chat'
import { ja } from '../lib/date-fns-locale'

export type ChatMessageProps = {
  id: string
  username: string
  userAvatarUrl: string
  createdAt: Date
  item: ChatItem
}

/**
 *  横並び: HStack で囲む
 */

export const ChatMessage = ({
  item,
  userAvatarUrl,
  username,
  createdAt,
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
        <Box>
          <Text>video</Text>
        </Box>
      ) : item.type === 'emoji' ? (
        <Box>
          <Text>{item.emoji}</Text>
        </Box>
      ) : null}
    </Box>
  )
}
