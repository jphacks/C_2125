import { addDoc, serverTimestamp } from 'firebase/firestore'
import { ref, uploadBytes } from 'firebase/storage'
import { useCallback } from 'react'
import { MOCK_USER_ID, MOCK_WORKSPACE_ID } from '../../constants/mock'
import { chatCollection } from '../../entities/chat'
import { usePermission } from '../../hooks/usePermission'
import { storage } from '../../lib/firebase'
import { ChatStackScreenProps, PermissionType } from '../../navigation/types'

export const useCameraPreviewScreen = ({
  navigation,
}: ChatStackScreenProps<'CameraPreview'>) => {
  const requestPermission = useCallback(
    (type: PermissionType) => {
      navigation.push('RequestPermissionModalScreen', { type })
    },
    [navigation],
  )

  const { isAvailable, isLoading } = usePermission({ requestPermission })

  const handleSubmitVideo = useCallback(
    async (uri: string) => {
      const result = await fetch(uri)
      const blob = await result.blob()
      const now = new Date().getTime()
      const upload = await uploadBytes(ref(storage, `public/${now}.mov`), blob)

      await addDoc(chatCollection(MOCK_WORKSPACE_ID), {
        createdAt: serverTimestamp(),
        id: '',
        item: { path: upload.ref.fullPath, type: 'video' },
        updatedAt: serverTimestamp(),
        userId: MOCK_USER_ID,
      })

      await addDoc(chatCollection(MOCK_WORKSPACE_ID), {
        createdAt: serverTimestamp(),
        id: '',
        //
        item: { emoji: '😀', type: 'emoji' },
        updatedAt: serverTimestamp(),
        userId: MOCK_USER_ID,
      })

      navigation.popToTop()
    },
    [navigation],
  )

  return {
    handleSubmitVideo,
    isAvailable,
    isLoading,
  }
}
