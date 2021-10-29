import { PermissionStatus } from 'expo-camera'
import { useEffect, useMemo } from 'react'
import { PermissionType } from '../navigation/types'
import { useCameraPermission } from './useCameraPermission'
import { useMicrophonePermission } from './useMicrophonePermission'

type UsePermissionOptions = {
  requestPermission: (type: PermissionType) => unknown
}

export const usePermission = ({ requestPermission }: UsePermissionOptions) => {
  const [cameraPermission, requestCameraPermission] = useCameraPermission({
    gotoRequestPermission: requestPermission,
  })
  const [microphonePermission, requestMicrophonePermission] =
    useMicrophonePermission({ gotoRequestPermission: requestPermission })

  const isAvailable = useMemo(() => {
    return (
      cameraPermission === PermissionStatus.GRANTED &&
      microphonePermission === PermissionStatus.GRANTED
    )
  }, [cameraPermission, microphonePermission])

  const isLoading = useMemo(() => {
    return (
      cameraPermission === PermissionStatus.UNDETERMINED ||
      microphonePermission === PermissionStatus.UNDETERMINED
    )
  }, [cameraPermission, microphonePermission])

  useEffect(() => {
    if (cameraPermission === PermissionStatus.UNDETERMINED) {
      void requestCameraPermission()
    }
  }, [cameraPermission, requestCameraPermission])

  useEffect(() => {
    if (microphonePermission === PermissionStatus.UNDETERMINED) {
      void requestMicrophonePermission()
    }
  }, [microphonePermission, requestMicrophonePermission])

  return {
    isAvailable,
    isLoading,
  }
}
