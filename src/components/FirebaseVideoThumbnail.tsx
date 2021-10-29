import { Entypo } from '@expo/vector-icons'
import {
  Box,
  Icon,
  Image,
  IPressableProps,
  Pressable,
  Spinner,
} from 'native-base'
import { useCallback } from 'react'
import { useStorageVideoThumbnail } from '../hooks/useStorageVideoThumbnail'

type FirebaseVideoThumbnailProps = Omit<IPressableProps, 'onPress'> & {
  path: string
  onPress?: (path: string) => void
}

export const FirebaseVideoThumbnail = ({
  path,
  onPress,
  ...props
}: FirebaseVideoThumbnailProps) => {
  const urlStatus = useStorageVideoThumbnail(path)

  const handlePress = useCallback(() => {
    return onPress?.(path)
  }, [onPress, path])

  if (urlStatus.status === 'loading') {
    return (
      <Pressable {...props} onPress={handlePress} position="relative">
        {({ isPressed }) => (
          <>
            <Box
              bg={isPressed ? 'rgba(52, 52, 52, 0.5)' : 'rgba(52, 52, 52, 0.4)'}
              h="100%"
              w="100%"
            />

            <Box
              alignItems="center"
              h="100%"
              justifyContent="center"
              position="absolute"
              w="100%"
            >
              <Spinner color="amber.500" size="lg" />
            </Box>
          </>
        )}
      </Pressable>
    )
  }

  if (urlStatus.status !== 'success') {
    return null
  }

  return (
    <Pressable {...props} onPress={handlePress} position="relative">
      {({ isPressed }) => (
        <>
          <Image
            alt="サムネイル"
            h="100%"
            resizeMode="cover"
            source={{ uri: urlStatus.data }}
            w="100%"
          />

          <Box
            bg={isPressed ? 'rgba(52, 52, 52, 0.5)' : 'rgba(52, 52, 52, 0.4)'}
            h="100%"
            position="absolute"
            w="100%"
          />

          <Box
            alignItems="center"
            h="100%"
            justifyContent="center"
            position="absolute"
            w="100%"
          >
            <Icon
              as={Entypo}
              color="gray.300"
              name="controller-play"
              size="24"
            />
          </Box>
        </>
      )}
    </Pressable>
  )
}
