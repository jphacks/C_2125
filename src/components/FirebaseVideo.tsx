import { Video } from 'expo-av'
import { Box, IBoxProps, Text } from 'native-base'
import { useStorageUrl } from '../hooks/useStorageUrl'

type FirebaseVideoProps = IBoxProps & {
  path: string
}

export const FirebaseVideo = ({ path, ...props }: FirebaseVideoProps) => {
  const urlStatus = useStorageUrl(path)

  if (urlStatus.status !== 'success') {
    return <Text>Loading...</Text>
  }

  return (
    <Box {...props}>
      <Video
        source={{ uri: urlStatus.data }}
        style={{ height: '100%', width: '100%' }}
        useNativeControls
      />
    </Box>
  )
}
