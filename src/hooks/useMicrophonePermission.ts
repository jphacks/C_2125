import { Camera, PermissionStatus } from 'expo-camera'
import { useCallback, useEffect, useState } from 'react'
import { PermissionType } from '../navigation/types'
import { useCheckIsMounted } from './useCheckIsMounted'

type UseMicrophonePermissionOptions = {
  gotoRequestPermission: (type: PermissionType) => unknown
}

export const useMicrophonePermission = ({
  gotoRequestPermission,
}: UseMicrophonePermissionOptions) => {
  const checkIsMounted = useCheckIsMounted()
  const [permission, setPermission] = useState<PermissionStatus>(
    PermissionStatus.UNDETERMINED,
  )

  const requestPermission = useCallback(async () => {
    // すでに許可を得ているため、要求は不要
    if (permission === PermissionStatus.GRANTED) return
    if (permission === PermissionStatus.DENIED) {
      await gotoRequestPermission('microphone')
      return
    }
    const { status } = await Camera.requestMicrophonePermissionsAsync()
    if (checkIsMounted()) {
      setPermission(status)
      if (status === PermissionStatus.DENIED) {
        await gotoRequestPermission('microphone')
      }
    }
  }, [checkIsMounted, gotoRequestPermission, permission])

  useEffect(() => {
    void Camera.getMicrophonePermissionsAsync().then(({ status }) => {
      if (checkIsMounted()) {
        setPermission(status)
      }
    })
  }, [checkIsMounted])

  return [permission, requestPermission] as const
}
