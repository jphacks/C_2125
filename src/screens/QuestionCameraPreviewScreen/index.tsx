import { Box, Text } from 'native-base'
import { ChatStackScreenProps } from '../../navigation/types'
import { Component } from './Component'
import { useQuestionCameraPreviewScreen } from './hooks'

export const QuestionCameraPreviewScreen = (
  props: ChatStackScreenProps<'QuestionCameraPreview'>,
) => {
  const { route } = props
  const { isLoading, isAvailable, handleSubmitVideo } =
    useQuestionCameraPreviewScreen(props)

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
