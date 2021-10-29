import { format } from 'date-fns'
import {
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  startAfter,
} from 'firebase/firestore'
import groupBy from 'lodash.groupby'
import lOrderBy from 'lodash.orderby'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Chat, chatCollection } from '../../entities/chat'
import { useCheckIsMounted } from '../../hooks/useCheckIsMounted'
import { isNotNull } from '../../lib/is-not-null'

const LIMIT_PER_QUERY = 10

const useFetchChats = (workspaceId: string) => {
  const fetchChats = useCallback(
    (lastCreatedAt?: Date) => {
      return getDocs(
        query(
          chatCollection(workspaceId),
          orderBy('createdAt', 'desc'),
          ...[
            lastCreatedAt && startAfter(lastCreatedAt),
            limit(LIMIT_PER_QUERY),
          ].filter(isNotNull),
        ),
      )
    },
    [workspaceId],
  )

  return fetchChats
}

type ChatSections = {
  title: string
  data: Chat[]
}

const useChatSection = () => {
  const [chats, setChats] = useState<Chat[]>([])

  const sections = useMemo<ChatSections[]>(() => {
    return lOrderBy(
      Object.entries(
        groupBy(chats, (chat) => format(chat.createdAt, 'yyyy年MM月dd日')),
      ).map(([key, value]) => {
        return {
          data: lOrderBy(value, 'createdAt', 'asc'),
          title: key,
        }
      }),
      'title',
    )
  }, [chats])

  const oldestChat = useMemo(() => {
    return lOrderBy(chats, 'createdAt', 'asc')[0]
  }, [chats])

  const addChat = useCallback((newChat: Chat) => {
    setChats((prev) => {
      if (prev.map((v) => v.id).includes(newChat.id)) {
        return prev
      }
      return [...prev, newChat]
    })
  }, [])

  const addChats = useCallback((newChats: Chat[]) => {
    setChats((prev) => {
      return [...prev, ...newChats]
    })
  }, [])

  return {
    addChat,
    addChats,
    oldestChat,
    sections,
  }
}

export const useChatScreen = (workspaceId: string) => {
  const { addChat, sections, addChats, oldestChat } = useChatSection()
  const checkIsMounted = useCheckIsMounted()

  const fetchChats = useFetchChats(workspaceId)

  const fetchMore = useCallback(async () => {
    if (!oldestChat) return
    await fetchChats(oldestChat.createdAt).then((result) => {
      if (checkIsMounted()) {
        addChats(result.docs.map((v) => v.data()))
      }
    })
  }, [addChats, checkIsMounted, fetchChats, oldestChat])

  useEffect(() => {
    void fetchChats().then((result) => {
      if (checkIsMounted()) {
        addChats(result.docs.map((v) => v.data()))
      }
    })
  }, [addChats, checkIsMounted, fetchChats])

  useEffect(() => {
    return onSnapshot(
      query(
        chatCollection(workspaceId),
        orderBy('createdAt', 'desc'),
        limit(1),
      ),
      {
        next: (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
              addChat(change.doc.data())
            }
          })
        },
      },
    )
  }, [addChat, workspaceId])

  return {
    fetchMore,
    sections,
  }
}
