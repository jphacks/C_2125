import { Pressable, Text, View } from 'native-base'
import * as React from 'react'
import { RootStackScreenProps } from '../navigation/types'

export const NotFoundScreen = ({
  navigation,
}: RootStackScreenProps<'NotFound'>) => {
  return (
    <View alignItems="center" flex={1} justifyContent="center" p={20}>
      <Text fontSize={20} fontWeight="bold">
        This screen doesn&apos;t exist.
      </Text>

      <Pressable
        mt={15}
        // eslint-disable-next-line react/jsx-no-bind
        onPress={() => navigation.replace('Root')}
        py={15}
      >
        <Text color="#2e78b7" fontSize={14}>
          Go to home screen!
        </Text>
      </Pressable>
    </View>
  )
}
