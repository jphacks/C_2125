import { Camera, CameraRecordingOptions } from 'expo-camera'
import { VideoCodec } from 'expo-camera/build/Camera.types'
import { useCallback, useEffect, useRef, useState } from 'react'

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
