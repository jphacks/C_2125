import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { ChatStackScreenProps } from '../../navigation/types'
import { Component } from './Component'

export const VideoPreviewScreen = ({
  route,
}: ChatStackScreenProps<'VideoPreview'>) => {
  return <Component path={route.params.path} />
}

export const videoPreviewOptions: NativeStackNavigationOptions = {
  title: 'プレビュー',
}
