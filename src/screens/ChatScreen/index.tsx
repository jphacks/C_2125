import { FontAwesome } from '@expo/vector-icons'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import sample from 'lodash.sample'
import { Pressable } from 'native-base'
import { useCallback } from 'react'
import { PressableStateCallbackType } from 'react-native'
import { MOCK_WORKSPACE_ID } from '../../constants/mock'
import { QUESTIONS } from '../../constants/question'
import { ChatStackScreenProps } from '../../navigation/types'
import { Component } from './Component'
import { useChatScreen } from './hooks'

export const ChatScreen = ({ navigation }: ChatStackScreenProps<'Home'>) => {
  const { sections, fetchMore } = useChatScreen(MOCK_WORKSPACE_ID)

  const goToEmojiSelect = useCallback(() => {
    navigation.push('EmojiSelect')
  }, [navigation])

  const goToCameraScreen = useCallback(() => {
    navigation.push('Camera')
  }, [navigation])

  const goToQuestion = useCallback(() => {
    // ランダムに質問を取得する処理
    const randomQuestion = sample(QUESTIONS) ?? ''
    navigation.push('Question', { text: randomQuestion })
  }, [navigation])

  const goToVideoPreview = useCallback(
    (path: string) => {
      navigation.push('VideoPreview', { path })
    },
    [navigation],
  )

  const goToQuestionVideoPreview = useCallback(
    (path: string, text: string) => {
      navigation.push('QuestionVideoPreview', { path, text })
    },
    [navigation],
  )

  return (
    <Component
      onEndReached={fetchMore}
      onPressCamera={goToCameraScreen}
      onPressEmojiSelect={goToEmojiSelect}
      onPressQuestion={goToQuestion}
      onPressQuestionVideo={goToQuestionVideoPreview}
      onPressVideo={goToVideoPreview}
      sections={sections.map(({ data, title }) => ({
        data: data.map((chat) => ({
          createdAt: chat.createdAt,
          id: chat.id,
          item: chat.item,
          userAvatarUrl:
            'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
          username: 'ゆうたくん',
        })),
        title,
      }))}
    />
  )
}

const HeaderRight = ({ navigation }: ChatStackScreenProps<'Home'>) => {
  const handlePress = useCallback(() => {
    return navigation.navigate('Modal')
  }, [navigation])

  const style = useCallback(
    ({ pressed }: PressableStateCallbackType) => ({
      opacity: pressed ? 0.5 : 1,
    }),
    [],
  )

  return (
    <Pressable onPress={handlePress} style={style}>
      <FontAwesome
        // color={Colors[colorScheme].text}
        name="info-circle"
        size={25}
        style={{ marginRight: 15 }}
      />
    </Pressable>
  )
}

export const chatScreenOptions = (
  props: ChatStackScreenProps<'Home'>,
): NativeStackNavigationOptions => ({
  headerRight: () => <HeaderRight {...props} />,
  title: 'Chat',
})
