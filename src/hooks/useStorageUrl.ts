import { getDownloadURL, ref } from 'firebase/storage'
import { QueryFunction, useQuery } from 'react-query'
import { storage } from '../lib/firebase'

const queryFn: QueryFunction<string, string> = async ({ queryKey }) => {
  const url = await getDownloadURL(ref(storage, queryKey[0]))
  return url
}

export const useStorageUrl = (path: string) => {
  return useQuery(path, { cacheTime: Infinity, queryFn, staleTime: Infinity })
}
