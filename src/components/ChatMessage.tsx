import { Avatar, Box, HStack, Text } from 'native-base'
import React from 'react'

type ChatMessageProps = {
  text: string
  username: string
  userAvatarUrl: string
  createdAt: string
}

/**
 *  横並び: HStack で囲む
 */

export const ChatMessage = ({
  text,
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
          {createdAt}
        </Text>
      </HStack>

      <Text color="white" fontSize="3xl">
        {text}
      </Text>
    </Box>
  )
}
