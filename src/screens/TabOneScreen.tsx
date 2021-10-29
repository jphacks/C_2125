import { FontAwesome } from '@expo/vector-icons'
import {
  Button,
  Pressable,
  Text,
  useDisclose,
  useToast,
  View,
} from 'native-base'
import { useCallback } from 'react'
import { PressableStateCallbackType } from 'react-native'
import { EditScreenInfo } from '../components/EditScreenInfo'
import { EmojiSelectModal } from '../components/EmojiSelectModal'
import { TabBarIcon } from '../components/TabBarIcon'
import { RootTabScreenProps } from '../navigation/types'

export const TabOneScreen = ({ navigation }: RootTabScreenProps<'TabOne'>) => {
  const { isOpen, onOpen, onClose } = useDisclose()
  const toast = useToast()

  const handleSelectEmoji = useCallback(
    (emoji: string) => {
      toast.show({
        description: emoji,
      })
    },
    [toast],
  )

  return (
    <View alignItems="center" flex={1} justifyContent="center">
      <Text fontSize={20} fontWeight="bold">
        tomokazuです
      </Text>

      <View h="1px" my="30px" w="80%" />

      <Button onPress={onOpen}>絵文字を選択する</Button>

      <EmojiSelectModal
        isOpen={isOpen}
        onClose={onClose}
        onSelectEmoji={handleSelectEmoji}
      />

      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  )
}

const HeaderRight = ({ navigation }: RootTabScreenProps<'TabOne'>) => {
  const handlePress = useCallback(() => {
    return navigation.navigate('Modal')
  }, [navigation])

  const style = useCallback(
    ({ pressed }: PressableStateCallbackType) => ({
      opacity: pressed ? 0.5 : 1,
    }),
    [],
  )

  return (
    <Pressable onPress={handlePress} style={style}>
      <FontAwesome
        // color={Colors[colorScheme].text}
        name="info-circle"
        size={25}
        style={{ marginRight: 15 }}
      />
    </Pressable>
  )
}

export const tabOneScreenOptions = (props: RootTabScreenProps<'TabOne'>) => ({
  headerRight: () => {
    return <HeaderRight {...props} />
  },
  tabBarIcon: ({ color }: { color: string }) => (
    <TabBarIcon color={color} name="code" />
  ),
  title: 'TabOne',
})
