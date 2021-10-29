import { Entypo } from '@expo/vector-icons'
import { Video } from 'expo-av'
import { Box, Button, HStack, Icon, Text } from 'native-base'
import { useCallback, useEffect } from 'react'
import { useIsLoading } from '../../hooks/useIsLoading'
import { useVideo } from '../../hooks/useVideo'

type ComponentProps = {
  uri: string
  handleSubmitVideo: (uri: string) => Promise<unknown>
}

export const Component = ({ uri, handleSubmitVideo }: ComponentProps) => {
  const { ref, onPlayAsync } = useVideo()
  const [isLoading, executeSubmitVideo] = useIsLoading(handleSubmitVideo)

  const handlePress = useCallback(async () => {
    await executeSubmitVideo(uri)
  }, [executeSubmitVideo, uri])

  useEffect(() => {
    void onPlayAsync()
  }, [onPlayAsync])

  return (
    <Box alignItems="center" flex={1} justifyContent="center">
      <Video
        isLooping
        ref={ref}
        resizeMode="contain"
        source={{
          uri: uri,
        }}
        style={{ flex: 1, height: '100%', width: '100%' }}
        useNativeControls
      />

      <Box>
        <Button
          colorScheme="emerald"
          isLoading={isLoading}
          onPress={handlePress}
        >
          <HStack alignItems="center" space="2">
            <Text color="white">送信</Text>

            <Icon as={Entypo} color="white" name="paper-plane" />
          </HStack>
        </Button>
      </Box>
    </Box>
  )
}
