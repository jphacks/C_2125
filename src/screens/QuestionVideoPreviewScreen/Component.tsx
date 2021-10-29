import { Box, Text } from 'native-base'
import { FirebaseVideo } from '../../components/FirebaseVideo'

type ComponentProps = {
  path: string
  text: string
}

export const Component = ({ path, text }: ComponentProps) => {
  return (
    <Box flex={1} px="1" py="4">
      <Box px="3">
        <Text>質問内容</Text>

        <Text>{text}</Text>
      </Box>

      <FirebaseVideo flex={1} path={path} />
    </Box>
  )
}
