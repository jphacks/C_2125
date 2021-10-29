import { Entypo } from '@expo/vector-icons'
import { Camera } from 'expo-camera'
import { VideoCodec } from 'expo-camera/build/Camera.types'
import { Box, HStack, Icon, IconButton, Spacer } from 'native-base'
import { useCallback } from 'react'
import { TabBarIcon } from '../../components/TabBarIcon'
import { useCamera } from '../../hooks/useCamera'

type ComponentProps = {
  onRecordVideo: (uri: string) => unknown
}

export const Component = ({ onRecordVideo }: ComponentProps) => {
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
    <Box alignItems="center" flex={1} justifyContent="center">
      <Camera
        ref={ref}
        style={{ flex: 1, width: '100%' }}
        type={Camera.Constants.Type.front}
      >
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
      </Camera>
    </Box>
  )
}

export const QuestionCameraScreenOptions = {
  tabBarIcon: ({ color }: { color: string }) => (
    <TabBarIcon color={color} name="video-camera" />
  ),
  title: 'Question Camera',
}
