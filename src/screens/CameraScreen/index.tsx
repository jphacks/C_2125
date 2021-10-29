import { Box, Text } from 'native-base'
import { ChatStackScreenProps } from '../../navigation/types'
import { Component } from './Component'
import { useCameraScreen } from './hooks'

export const CameraScreen = (props: ChatStackScreenProps<'Camera'>) => {
  const { isLoading, isAvailable, onRecordVideo } = useCameraScreen(props)

  if (isLoading) {
    return (
      <Box>
        <Text>Loading...</Text>
      </Box>
    )
  }

  if (!isAvailable) {
    return (
      <Box>
        <Text>カメラ又はマイクが利用できません</Text>
      </Box>
    )
  }
  return <Component onRecordVideo={onRecordVideo} />
}
