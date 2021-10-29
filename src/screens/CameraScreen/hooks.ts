import { useCallback } from 'react'
import { usePermission } from '../../hooks/usePermission'
import { ChatStackScreenProps, PermissionType } from '../../navigation/types'

export const useCameraScreen = ({
  navigation,
}: ChatStackScreenProps<'Camera'>) => {
  const requestPermission = useCallback(
    (type: PermissionType) => {
      navigation.push('RequestPermissionModalScreen', { type })
    },
    [navigation],
  )

  const { isAvailable, isLoading } = usePermission({ requestPermission })

  const onRecordVideo = useCallback(
    (uri: string) => {
      navigation.push('CameraPreview', { uri })
    },
    [navigation],
  )

  return {
    isAvailable,
    isLoading,
    onRecordVideo,
  }
}
