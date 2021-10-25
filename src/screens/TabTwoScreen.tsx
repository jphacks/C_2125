import { Text, View } from 'native-base'
import { EditScreenInfo } from '../components/EditScreenInfo'
import { TabBarIcon } from '../components/TabBarIcon'

export const TabTwoScreen = () => {
  return (
    <View alignItems="center" flex={1} justifyContent="center">
      <Text fontSize={20} fontWeight="bold">
        Tab Two
      </Text>

      <View h="1px" my="30px" w="80%" />

      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  )
}

export const tabTwoScreenOptions = {
  tabBarIcon: ({ color }: { color: string }) => (
    <TabBarIcon color={color} name="code" />
  ),
  title: 'Tab Two',
}
