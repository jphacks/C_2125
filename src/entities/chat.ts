import { collection, doc } from 'firebase/firestore'
import { workspaceCollection } from './workspace'

export type ChatItemVideo = {
  type: 'video'
  path: string
}

export type ChatItemEmoji = {
  type: 'emoji'
  emoji: string
}

export type ChatItem = ChatItemVideo | ChatItemEmoji

export type Chat = {
  id: string
  createdAt: Date
  updatedAt: Date
  userId: string
  item: ChatItem
}

export const chatCollection = (workspaceId: string) => {
  return collection(
    doc(workspaceCollection(), workspaceId),
    'chats',
  ).withConverter<Chat>({
    fromFirestore: (snapshot) => {
      const data = snapshot.data()
      return {
        createdAt: data.createdAt?.toDate() ?? new Date(),
        id: snapshot.id,
        item: data.item,
        updatedAt: data.updatedAt?.toDate() ?? new Date(),
        userId: data.userId,
      }
    },
    toFirestore: (chat: Chat) => {
      return {
        createdAt: chat.createdAt,
        item: chat.item,
        updatedAt: chat.updatedAt,
        userId: chat.userId,
      }
    },
  })
}
