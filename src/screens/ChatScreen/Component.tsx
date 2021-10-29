import { Button, HStack, SectionList, Text, View } from 'native-base'
import { useCallback } from 'react'
import { ListRenderItem, SectionListRenderItem } from 'react-native'
import { ChatMessage, ChatMessageProps } from '../../components/ChatMessage'
import { TabBarIcon } from '../../components/TabBarIcon'

type ComponentProps = {
  onPressEmojiSelect: () => unknown
  onPressCamera: () => unknown
  sections: { data: ChatMessageProps[]; title: string }[]
  onEndReached: () => unknown
  onPressQuestion: () => unknown
  onPressVideo?: (path: string) => unknown
}

const RenderItem: ListRenderItem<
  ChatMessageProps & { onPressVideo?: (path: string) => unknown }
> = ({ item }) => <ChatMessage {...item} />

const keyExtractor = (item: ChatMessageProps) => item.id

const renderSectionHeader = ({
  section: { title },
}: {
  section: { title: string }
}) => (
  <Text color="gray.300" textAlign="center">
    {title}
  </Text>
)

export const Component = ({
  onPressEmojiSelect,
  onPressCamera,
  sections,
  onEndReached,
  onPressQuestion,
  onPressVideo,
}: ComponentProps) => {
  const renderItem = useCallback<SectionListRenderItem<ChatMessageProps>>(
    ({ item, ...props }) => (
      <RenderItem item={{ ...item, onPressVideo }} {...props} />
    ),
    [onPressVideo],
  )

  return (
    <View
      // _contentContainerStyle={{ mb: '4', minW: '72', px: '20px' }}
      bg="darkBlue.400"
      flex={1}
      justifyContent="center"
    >
      <HStack>
        <Button flex={1} fontSize={20} fontWeight="bold">
          俺らファミリー卍
        </Button>
      </HStack>

      <SectionList
        flex={1}
        keyExtractor={keyExtractor}
        onEndReached={onEndReached}
        p={4}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        sections={sections}
        stickySectionHeadersEnabled={false}
      />

      <HStack space={1}>
        <Button flex={1} fontSize="2xs" onPress={onPressEmojiSelect} size="24">
          <Text bold color="white" fontSize="2xl">
            絵文字で返信
          </Text>
        </Button>

        <Button colorScheme="green" flex={1} onPress={onPressCamera} size="24">
          <Text bold color="white" fontSize="2xl">
            動画で返信
          </Text>
        </Button>
      </HStack>

      <Button
        colorScheme="pink"
        fontSize="2xl"
        onPress={onPressQuestion}
        size="24"
        w="100%"
      >
        <Text bold color="white" fontSize="2xl">
          質問に答える
        </Text>
      </Button>
    </View>
  )
}

export const ChatScreenOptions = {
  tabBarIcon: ({ color }: { color: string }) => (
    <TabBarIcon color={color} name="comment" />
  ),
  title: 'Chat',
}
