import { Button, HStack, ScrollView, Stack, Text, View } from 'native-base'
import * as React from 'react'
import { ChatMessage } from '../../components/ChatMessage'

type ComponentProps = {
  testValue: string
}

export const Component = ({ testValue }: ComponentProps) => {
  return (
    <View bg="darkBlue.400" flex={1} justifyContent="center">
      <HStack>
        <Button size="16">リトライ</Button>

        <Button flex={1} fontSize={20} fontWeight="bold">
          俺らファミリー卍
        </Button>
      </HStack>

      <ScrollView>
        <Stack flex={1} px={4} space={4}>
          <Text color="white">2021年10月25日</Text>

          <ChatMessage
            createdAt="20:00"
            text="こんにちは"
            userAvatarUrl="https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg"
            username="ゆうたくん"
          />

          <ChatMessage
            createdAt="20:25"
            text="こちらこそ"
            userAvatarUrl="https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg"
            username="きみこさん"
          />

          <ChatMessage
            createdAt="20:28"
            text="調子はどう？"
            userAvatarUrl="https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg"
            username="ゆうたくん"
          />
        </Stack>
      </ScrollView>

      <HStack space={1}>
        <Button flex={1} fontSize="2xs" size="24">
          <Text color="white" fontSize="2xl">
            絵文字で返信
          </Text>
        </Button>

        <Button colorScheme="green" flex={1} size="24">
          <Text color="white" fontSize="2xl">
            動画で返信
          </Text>
        </Button>
      </HStack>
    </View>
  )
}
