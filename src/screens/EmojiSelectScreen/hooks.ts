import { addDoc, serverTimestamp } from 'firebase/firestore'
import { useCallback } from 'react'
import { MOCK_USER_ID, MOCK_WORKSPACE_ID } from '../../constants/mock'
import { chatCollection } from '../../entities/chat'
import { ChatStackScreenProps } from '../../navigation/types'

export const useEmojiSelectScreen = ({
  navigation,
}: ChatStackScreenProps<'EmojiSelect'>) => {
  const sendEmoji = useCallback(
    async (emoji: string) => {
      await addDoc(chatCollection(MOCK_WORKSPACE_ID), {
        createdAt: serverTimestamp(),
        id: '',
        item: { emoji, type: 'emoji' },
        updatedAt: serverTimestamp(),
        userId: MOCK_USER_ID,
      })
      navigation.popToTop()
    },
    [navigation],
  )

  return {
    sendEmoji,
  }
}
