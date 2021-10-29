import { useCallback } from 'react'
import { usePermission } from '../../hooks/usePermission'
import { PermissionType, RootTabScreenProps } from '../../navigation/types'

export const useQuestionCameraScreen = (
  options: RootTabScreenProps<'QuestionCamera'>,
) => {
  const requestPermission = useCallback(
    (type: PermissionType) => {
      options.navigation.push('RequestPermissionModalScreen', { type })
    },
    [options.navigation],
  )

  const { isAvailable, isLoading } = usePermission({ requestPermission })

  return {
    isAvailable,
    isLoading,
  }
}
