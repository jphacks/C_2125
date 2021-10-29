import { useCallback } from 'react'
import { usePermission } from '../../hooks/usePermission'
import { ChatStackScreenProps, PermissionType } from '../../navigation/types'

export const useQuestionCameraScreen = ({
  navigation,
  route,
}: ChatStackScreenProps<'QuestionCamera'>) => {
  const requestPermission = useCallback(
    (type: PermissionType) => {
      navigation.push('RequestPermissionModalScreen', { type })
    },
    [navigation],
  )

  const { isAvailable, isLoading } = usePermission({ requestPermission })

  const onRecordVideo = useCallback(
    (uri: string) => {
      navigation.push('QuestionCameraPreview', { text: route.params.text, uri })
    },
    [navigation, route.params.text],
  )

  return {
    isAvailable,
    isLoading,
    onRecordVideo,
  }
}
