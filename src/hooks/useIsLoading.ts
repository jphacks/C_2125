import { useCallback, useEffect, useRef, useState } from 'react'
import { useCheckIsMounted } from './useCheckIsMounted'

type UseIsLoading<T> = [boolean, T]

export const useIsLoading = <Args extends unknown[], Res>(
  callback: (...args: Args) => Promise<Res>,
): UseIsLoading<(...args: Args) => Promise<Res>> => {
  const [isLoading, setIsLoading] = useState(false)
  const checkIsMounted = useCheckIsMounted()
  const callbackRef = useRef(callback)

  const execute = useCallback<(...args: Args) => Promise<Res>>(
    async (...args) => {
      setIsLoading(true)
      try {
        return await callbackRef.current(...args)
      } finally {
        if (checkIsMounted()) {
          setIsLoading(false)
        }
      }
    },
    [checkIsMounted],
  )

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  return [isLoading, execute]
}
