import { Camera, PermissionStatus } from 'expo-camera'
import { useCallback, useEffect, useState } from 'react'
import { PermissionType } from '../navigation/types'
import { useCheckIsMounted } from './useCheckIsMounted'

type UseCameraPermissionOptions = {
  gotoRequestPermission: (type: PermissionType) => unknown
}

export const useCameraPermission = ({
  gotoRequestPermission,
}: UseCameraPermissionOptions) => {
  const checkIsMounted = useCheckIsMounted()
  const [permission, setPermission] = useState<PermissionStatus>(
    PermissionStatus.UNDETERMINED,
  )

  const requestPermission = useCallback(async () => {
    // すでに許可を得ているため、要求は不要
    if (permission === PermissionStatus.GRANTED) return
    if (permission === PermissionStatus.DENIED) {
      await gotoRequestPermission('camera')
      return
    }
    const { status } = await Camera.requestCameraPermissionsAsync()
    if (checkIsMounted()) {
      setPermission(status)
      if (status === PermissionStatus.DENIED) {
        await gotoRequestPermission('camera')
      }
    }
  }, [checkIsMounted, gotoRequestPermission, permission])

  useEffect(() => {
    void Camera.getCameraPermissionsAsync().then(({ status }) => {
      if (checkIsMounted()) {
        setPermission(status)
      }
    })
  }, [checkIsMounted])

  return [permission, requestPermission] as const
}
