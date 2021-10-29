import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { ChatStackScreenProps } from '../../navigation/types'
import { Component } from './Component'

export const QuestionVideoPreviewScreen = ({
  route,
}: ChatStackScreenProps<'QuestionVideoPreview'>) => {
  return <Component path={route.params.path} text={route.params.text} />
}

export const questionVideoPreviewOptions: NativeStackNavigationOptions = {
  title: '質問の回答',
}
