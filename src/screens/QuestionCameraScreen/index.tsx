import { Box, Text } from 'native-base'
import React from 'react'
import { RootTabScreenProps } from '../../navigation/types'
import { Component } from './Component'
import { useQuestionCameraScreen } from './hooks'

export const QuestionCameraScreen = (
  props: RootTabScreenProps<'QuestionCamera'>,
) => {
  const { isLoading, isAvailable } = useQuestionCameraScreen(props)

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

  return <Component />
}
