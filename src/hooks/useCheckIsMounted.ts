import { useCallback, useEffect, useRef } from 'react'

export const useCheckIsMounted = () => {
  const isMountedRef = useRef(false)

  const checkIsMounted = useCallback(() => {
    return isMountedRef.current
  }, [])

  useEffect(() => {
    isMountedRef.current = true
  }, [])

  return checkIsMounted
}
