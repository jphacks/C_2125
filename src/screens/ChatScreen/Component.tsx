import { Button, HStack, SectionList, Text, View } from 'native-base'
import { memo, useCallback } from 'react'
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
  onPressQuestionVideo?: (path: string, text: string) => unknown
}

const RenderItem: ListRenderItem<
  ChatMessageProps & {
    onPressVideo?: (path: string) => unknown
    onPressQuestionVideo?: (path: string, text: string) => unknown
  }
> = memo(
  ({ item }) => <ChatMessage {...item} />,
  (prevProps, nextProps) => prevProps.item.id === nextProps.item.id,
)

const keyExtractor = (item: ChatMessageProps) => item.id

const renderSectionFooter = ({
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
  onPressQuestionVideo,
}: ComponentProps) => {
  const renderItem = useCallback<SectionListRenderItem<ChatMessageProps>>(
    ({ item, ...props }) => (
      <RenderItem
        item={{ ...item, onPressQuestionVideo, onPressVideo }}
        {...props}
      />
    ),
    [onPressQuestionVideo, onPressVideo],
  )

  return (
    <View bg="darkBlue.400" flex={1} justifyContent="center">
      <HStack>
        <Button flex={1} fontSize={20} fontWeight="bold">
          俺らファミリー卍
        </Button>
      </HStack>

      <SectionList
        inverted
        keyExtractor={keyExtractor}
        onEndReached={onEndReached}
        px="4"
        renderItem={renderItem}
        renderSectionFooter={renderSectionFooter}
        sections={sections}
      />

      <HStack mb="1" space={1}>
        <Button flex={1} fontSize="2xs" onPress={onPressEmojiSelect} size="16">
          <Text bold color="white" fontSize="2xl">
            絵文字で返信
          </Text>
        </Button>

        <Button colorScheme="green" flex={1} onPress={onPressCamera} size="16">
          <Text bold color="white" fontSize="2xl">
            動画で返信
          </Text>
        </Button>
      </HStack>

      <Button
        colorScheme="pink"
        fontSize="2xl"
        onPress={onPressQuestion}
        size="16"
        w="100%"
      >
        <Text bold color="white" fontSize="2xl">
          質問に答える
        </Text>
      </Button>
    </View>
  )
}
export const ChatScreenIconOptions = {
  tabBarIcon: ({ color }: { color: string }) => (
    <TabBarIcon color={color} name="comment" />
  ),
  title: 'Chat',
}
