import { Ionicons } from '@expo/vector-icons'
import {
  Box,
  Button,
  Heading,
  Icon,
  Image,
  ScrollView,
  Stack,
} from 'native-base'
import { useCallback, useState } from 'react'
import { ChatStackScreenProps } from '../navigation/types'

export const QuestionScreen = ({
  navigation,
  route,
}: ChatStackScreenProps<'Question'>) => {
  const [now] = useState(new Date())

  // 年
  const year = now.getFullYear()
  // 月
  const month = now.getMonth() + 1 // <- 注意
  // 日
  const day = now.getDate()
  // 時間
  const hour = now.getHours()
  // 昼ならTrue、夜ならFalse
  const isMorning = hour <= 12 // 0 ~ 12(12含む) 時までを昼として捉える場合

  const time = isMorning ? '朝' : '夜'

  const handlePressAnswer = useCallback(() => {
    navigation.push('QuestionCamera', { text: route.params.text })
  }, [])

  return (
    <ScrollView flex={1}>
      <Stack alignItems="center" space={3}>
        <Heading mt="4" size="xl">
          {`${year}年 ${month}月${day}日、${time}の質問`}
        </Heading>

        <Box
          _text={{
            fontSize: '2xl',
            fontWeight: 'bold',
            letterSpacing: 'lg',
          }}
          bg="blue.100"
          p="8"
          rounded="3xl"
          shadow={5}
        >
          {route.params.text}
        </Box>

        <Image
          alt="もも"
          h="24"
          maxW="24"
          source={{
            uri: 'https://3.bp.blogspot.com/-Yvy09WjuJSs/Uxa-7Y_O1wI/AAAAAAAAd1A/SPVxb6GfFRA/s800/character_peach.png',
          }}
          w="100%"
        />
      </Stack>

      {/* ref: https://docs.nativebase.io/button */}

      <Button
        _text={{
          fontSize: '3xl',
        }}
        colorScheme="darkBlue"
        endIcon={<Icon as={Ionicons} name="arrow-forward" size="xl" />}
        height="24"
        mt="0"
        onPress={handlePressAnswer}
      >
        動画を撮る
      </Button>
    </ScrollView>
  )
}
