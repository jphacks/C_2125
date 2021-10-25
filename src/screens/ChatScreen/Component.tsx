import { Text, View } from 'native-base'
import { EditScreenInfo } from '../../components/EditScreenInfo'

type ComponentProps = {
  testValue: string
}

export const Component = ({ testValue }: ComponentProps) => {
  return (
    <View alignItems="center" flex={1} justifyContent="center">
      <Text fontSize={20} fontWeight="bold">
        Chat Screen です: {testValue}
      </Text>

      <View h="1px" my="30px" w="80%" />

      <EditScreenInfo path="/screens/ChatScreen.tsx" />
    </View>
  )
}
