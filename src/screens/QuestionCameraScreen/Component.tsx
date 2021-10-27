import { Camera } from 'expo-camera'
import { VideoCodec } from 'expo-camera/build/Camera.types'
import { Button, Spacer, Text, useToast, View } from 'native-base'
import React, { useCallback, useState } from 'react'
import { useCamera } from './hooks'

export const Component = () => {
  const [type, setType] = useState(Camera.Constants.Type.front)
  const toast = useToast()

  const onRecord = useCallback(
    (value: { uri: string; codec?: VideoCodec | undefined }) => {
      toast.show({ description: JSON.stringify(value) })
    },
    [toast],
  )

  const { ref, endRecord, isRecording, startRecord } = useCamera({ onRecord })

  const toggleRecord = useCallback(() => {
    if (isRecording) {
      endRecord()
    } else {
      startRecord()
    }
  }, [endRecord, isRecording, startRecord])

  const toggleType = useCallback(() => {
    setType((prev) =>
      prev === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    )
  }, [])

  return (
    <View alignItems="center" flex={1} justifyContent="center">
      <Text fontSize={20} fontWeight="bold">
        動画撮影
      </Text>

      <Camera ref={ref} style={{ flex: 1, width: '100%' }} type={type}>
        <View flex={1}>
          <Spacer />

          <Button onPress={toggleType}>Flip</Button>

          <Button onPress={toggleRecord}>
            {isRecording ? '録画停止' : '録画開始'}
          </Button>
        </View>
      </Camera>
    </View>
  )
}
