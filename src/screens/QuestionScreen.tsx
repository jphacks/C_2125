import { Ionicons } from '@expo/vector-icons'
import { Box, Button, Heading, Icon, Image, Stack, View } from 'native-base'
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

  const handlePressBack = useCallback(() => {
    // TODO: チャットの画面に遷移させる
  }, [])

  const handlePressAnswer = useCallback(() => {
    // TODO: 動画の画面に遷移させる
  }, [])

  return (
    <View>
      <Button
        _text={{
          fontSize: '2xl',
        }}
        colorScheme="blue"
        mr="70%"
        onPress={handlePressBack}
        startIcon={<Icon as={Ionicons} name="arrow-back" />}
      >
        戻る
      </Button>

      <Stack alignItems="center" space={3}>
        <Heading mt="5%" size="xl">
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
          h="25%"
          source={{
            uri: 'https://3.bp.blogspot.com/-Yvy09WjuJSs/Uxa-7Y_O1wI/AAAAAAAAd1A/SPVxb6GfFRA/s800/character_peach.png',
          }}
          w="22%"
        />
      </Stack>

      {/* ref: https://docs.nativebase.io/button */}

      <Button
        _text={{
          fontSize: '3xl',
        }}
        colorScheme="blue"
        endIcon={<Icon as={Ionicons} name="arrow-forward" size="xl" />}
        height="15%"
        mt="0"
        onPress={handlePressAnswer}
      >
        質問に答える
      </Button>
    </View>
  )
}
