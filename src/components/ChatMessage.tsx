import { format } from 'date-fns'
import { Avatar, Box, HStack, Text } from 'native-base'
import { memo } from 'react'
import { ChatItem } from '../entities/chat'
import { ja } from '../lib/date-fns-locale'
import { ChatQuestionVideoMessage } from './ChatQuestionVideoMessage'
import { ChatVideoMessage } from './ChatVideoMessage'

export type ChatMessageProps = {
  id: string
  username: string
  userAvatarUrl: string
  createdAt: Date
  item: ChatItem
  onPressVideo?: (path: string) => unknown
  onPressQuestionVideo?: (path: string, text: string) => unknown
}

export const ChatMessage = memo(
  ({
    item,
    userAvatarUrl,
    username,
    createdAt,
    onPressVideo,
    onPressQuestionVideo,
  }: ChatMessageProps) => {
    return (
      <Box>
        <HStack alignItems="baseline" space="2">
          <Avatar
            size="8"
            source={{
              uri: userAvatarUrl,
            }}
          />

          <Text color="white" fontSize="2xl">
            {username}
          </Text>

          <Text color="white">
            {format(createdAt, 'hh:mm', { locale: ja })}
          </Text>
        </HStack>

        {item.type === 'video' ? (
          <Box px="7">
            <ChatVideoMessage item={item} onPress={onPressVideo} />
          </Box>
        ) : item.type === 'question-video' ? (
          <Box px="7">
            <ChatQuestionVideoMessage
              item={item}
              onPress={onPressQuestionVideo}
            />
          </Box>
        ) : item.type === 'emoji' ? (
          <Box px="7">
            <Text fontSize="7xl">{item.emoji}</Text>
          </Box>
        ) : null}
      </Box>
    )
  },
  (prevProps, nextProps) => prevProps.id === nextProps.id,
)
