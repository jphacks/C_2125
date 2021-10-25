import { Pressable, Text, View } from 'native-base'
import { useCallback } from 'react'
import { RootStackScreenProps } from '../navigation/types'

export const NotFoundScreen = ({
  navigation,
}: RootStackScreenProps<'NotFound'>) => {
  const handlePress = useCallback(() => {
    return navigation.replace('Root')
  }, [navigation])

  return (
    <View alignItems="center" flex={1} justifyContent="center" p={20}>
      <Text fontSize={20} fontWeight="bold">
        This screen doesn&apos;t exist.
      </Text>

      <Pressable mt={15} onPress={handlePress} py={15}>
        <Text color="#2e78b7" fontSize={14}>
          Go to home screen!
        </Text>
      </Pressable>
    </View>
  )
}
