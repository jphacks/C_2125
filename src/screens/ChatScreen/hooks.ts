import { collection, doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useCheckIsMounted } from '../../hooks/useCheckIsMounted'
import { firestore } from '../../lib/firebase'

const useTestValue = () => {
  const checkIsMounted = useCheckIsMounted()
  const [value, setValue] = useState('')

  useEffect(() => {
    void getDoc(doc(collection(firestore, 'test'), 'test')).then((result) => {
      if (checkIsMounted()) {
        setValue(result.data()?.name)
      }
    })
  }, [checkIsMounted])

  return value
}

export const useChatScreen = () => {
  const testValue = useTestValue()

  return {
    testValue,
  }
}
