import { Box, Text } from 'native-base'
import { ChatStackScreenProps } from '../../navigation/types'
import { Component } from './Component'
import { useQuestionCameraScreen } from './hooks'

export const QuestionCameraScreen = (
  props: ChatStackScreenProps<'QuestionCamera'>,
) => {
  const { route } = props
  const { isLoading, isAvailable, onRecordVideo } =
    useQuestionCameraScreen(props)

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

  return <Component onRecordVideo={onRecordVideo} text={route.params.text} />
}
