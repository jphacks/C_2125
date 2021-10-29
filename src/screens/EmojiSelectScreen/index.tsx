import { ChatStackScreenProps } from '../../navigation/types'
import { Component } from './Component'
import { useEmojiSelectScreen } from './hooks'

export const EmojiSelectScreen = (
  props: ChatStackScreenProps<'EmojiSelect'>,
) => {
  const { sendEmoji } = useEmojiSelectScreen(props)

  return <Component onSubmitEmoji={sendEmoji} />
}
