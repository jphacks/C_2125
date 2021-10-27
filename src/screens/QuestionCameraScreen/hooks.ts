import { Camera, CameraRecordingOptions, PermissionStatus } from 'expo-camera'
import { VideoCodec } from 'expo-camera/build/Camera.types'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useCameraPermission } from '../../hooks/useCameraPermission'
import { useMicrophonePermission } from '../../hooks/useMicrophonePermission'
import { PermissionType, RootTabScreenProps } from '../../navigation/types'

const usePermission = ({
  navigation,
}: RootTabScreenProps<'QuestionCamera'>) => {
  const gotoRequestPermission = useCallback(
    (type: PermissionType) => {
      navigation.push('RequestPermissionModalScreen', { type })
    },
    [navigation],
  )

  const [cameraPermission, requestCameraPermission] = useCameraPermission({
    gotoRequestPermission,
  })
  const [microphonePermission, requestMicrophonePermission] =
    useMicrophonePermission({ gotoRequestPermission })

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

type UseCameraOptions = {
  onRecord?: (value: { uri: string; codec?: VideoCodec | undefined }) => unknown
}

export const useCamera = ({ onRecord }: UseCameraOptions) => {
  const ref = useRef<Camera>(null)
  const onRecordRef = useRef(onRecord)
  const [isRecording, setIsRecording] = useState(false)

  const startRecord = useCallback((options?: CameraRecordingOptions) => {
    ref.current
      ?.recordAsync(options)
      .then((result) => {
        onRecordRef.current?.(result)
      })
      .finally(() => {
        setIsRecording(false)
      })
    setIsRecording(true)
  }, [])

  const endRecord = useCallback(() => {
    ref.current?.stopRecording()
  }, [])

  useEffect(() => {
    onRecordRef.current = onRecord
  }, [onRecord])

  return {
    endRecord,
    isRecording,
    ref,
    startRecord,
  }
}

export const useQuestionCameraScreen = (
  options: RootTabScreenProps<'QuestionCamera'>,
) => {
  const { isAvailable, isLoading } = usePermission(options)

  return {
    isAvailable,
    isLoading,
  }
}
