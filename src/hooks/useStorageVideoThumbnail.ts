import { getThumbnailAsync } from 'expo-video-thumbnails'
import { QueryFunction, useQuery } from 'react-query'
import { useStorageUrl } from './useStorageUrl'

const queryFn: QueryFunction<string, string> = async ({ queryKey }) => {
  const { uri } = await getThumbnailAsync(queryKey[0])
  return uri
}

export const useStorageVideoThumbnail = (path: string) => {
  const storageUrl = useStorageUrl(path)
  return useQuery(storageUrl.data ?? '', {
    cacheTime: Infinity,
    enabled: storageUrl.status === 'success',
    queryFn,
    staleTime: Infinity,
  })
}
