import { Box, Text } from 'native-base'
import { ChatStackScreenProps } from '../../navigation/types'
import { Component } from './Component'
import { useCameraPreviewScreen } from './hooks'

export const CameraPreviewScreen = (
  props: ChatStackScreenProps<'CameraPreview'>,
) => {
  const { route } = props
  const { isLoading, isAvailable, handleSubmitVideo } =
    useCameraPreviewScreen(props)

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
  return (
    <Component handleSubmitVideo={handleSubmitVideo} uri={route.params.uri} />
  )
}
