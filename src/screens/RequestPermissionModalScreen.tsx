import { openSettings } from 'expo-linking'
import { Link, Text, View } from 'native-base'
import { useCallback } from 'react'
import { RootStackScreenProps } from '../navigation/types'

export const RequestPermissionModalScreen = ({
  route,
}: RootStackScreenProps<'RequestPermissionModalScreen'>) => {
  const label = route.params.type === 'camera' ? 'カメラ' : 'マイク'
  const handlePressSetting = useCallback(() => {
    void openSettings()
  }, [])

  return (
    <View alignItems="center" flex={1} justifyContent="center">
      <Text fontSize={20} fontWeight="bold">
        {label} の使用許可が必要です
      </Text>

      <Text>
        <Link onPress={handlePressSetting}>設定</Link>
        から許可を与えてください。
      </Text>
    </View>
  )
}
