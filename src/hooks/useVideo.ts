import { AVPlaybackStatus, Video } from 'expo-av'
import { useCallback, useRef, useState } from 'react'

export const useVideo = () => {
  const ref = useRef<Video>(null)
  const [status, setStatus] = useState<AVPlaybackStatus>({ isLoaded: false })

  const onTogglePlaying = useCallback(() => {
    if (status.isLoaded && status.isPlaying) {
      ref.current?.pauseAsync()
    } else if (status.isLoaded) {
      ref.current?.playAsync()
    }
  }, [status])

  const onPlayAsync = useCallback(async () => {
    return ref.current?.playAsync()
  }, [])

  return {
    onPlayAsync,
    onPlaybackStatusUpdate: setStatus,
    onTogglePlaying,
    ref,
    status,
  }
}
