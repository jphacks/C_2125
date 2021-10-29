import { Entypo } from '@expo/vector-icons'
import { Camera } from 'expo-camera'
import { VideoCodec } from 'expo-camera/build/Camera.types'
import { HStack, Icon, IconButton, Spacer, Text, View } from 'native-base'
import { useCallback } from 'react'
import { useCamera } from '../../hooks/useCamera'

type ComponentProps = {
  text: string
  onRecordVideo: (uri: string) => unknown
}

export const Component = ({ text, onRecordVideo }: ComponentProps) => {
  const onRecord = useCallback(
    (value: { uri: string; codec?: VideoCodec | undefined }) => {
      onRecordVideo(value.uri)
    },
    [onRecordVideo],
  )

  const { ref, endRecord, isRecording, startRecord } = useCamera({ onRecord })

  const toggleRecord = useCallback(() => {
    if (isRecording) {
      endRecord()
    } else {
      startRecord()
    }
  }, [endRecord, isRecording, startRecord])

  return (
    <View alignItems="center" flex={1} justifyContent="center">
      <Text fontSize={20} fontWeight="bold" px="4" py="2">
        {text}
      </Text>

      <Camera
        ref={ref}
        style={{ flex: 1, width: '100%' }}
        type={Camera.Constants.Type.front}
      >
        <View flex={1}>
          <Spacer />

          <HStack justifyContent="center" py="6">
            <IconButton
              bg="white"
              icon={
                <Icon
                  as={Entypo}
                  color="red.400"
                  name={isRecording ? 'controller-stop' : 'controller-record'}
                  size="16"
                />
              }
              onPress={toggleRecord}
              rounded="full"
            />
          </HStack>
        </View>
      </Camera>
    </View>
  )
}
