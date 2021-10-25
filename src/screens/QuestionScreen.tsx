import { StatusBar } from 'expo-status-bar'
import {
  Text,
  View,
  Button,
  Icon,
  Box,
  Stack,
  Heading,
  Image,
} from 'native-base'
import { useState } from 'react'
import { Platform } from 'react-native'
import { EditScreenInfo } from '../components/EditScreenInfo'
import { ChatStackScreenProps } from '../navigation/types'
import { Ionicons } from '@expo/vector-icons'

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

  let time
  if (isMorning) {
    time = '朝'
  } else {
    time = '夜'
  }

  return (
    <View>
      <Button
        startIcon={<Icon as={Ionicons} name="arrow-back" />}
        colorScheme="blue"
        mr="70%"
        _text={{
          fontSize: '2xl',
        }}
        //　TODO: チャットの画面に遷移させる
        onPress={() => console.log('back')}
      >
        戻る
      </Button>
      <Stack alignItems="center" space={3}>
        <Heading size="xl" mt="5%">
          {year}年 {month}月{day}日、{time}の質問
        </Heading>
        <Box
          bg="blue.100"
          rounded="3xl"
          p="8"
          _text={{
            fontSize: '2xl',
            fontWeight: 'bold',
            letterSpacing: 'lg',
          }}
          shadow={5}
        >
          {route.params.text}
        </Box>
        <Image
          alt="もも"
          w="22%"
          h="25%"
          source={{
            uri: 'https://3.bp.blogspot.com/-Yvy09WjuJSs/Uxa-7Y_O1wI/AAAAAAAAd1A/SPVxb6GfFRA/s800/character_peach.png',
          }}
        />
      </Stack>
      {/* ref: https://docs.nativebase.io/button */}
      <Button
        height="15%"
        mt="0"
        endIcon={<Icon as={Ionicons} name="arrow-forward" size="xl" />}
        colorScheme="blue"
        _text={{
          fontSize: '3xl',
        }}
        //　TODO: 動画の画面に遷移させる
        onPress={() => console.log('ok')}
      >
        質問に答える
      </Button>
    </View>
  )
}
