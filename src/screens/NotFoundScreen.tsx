import * as React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View } from '../components/Themed'
import { RootStackScreenProps } from '../navigation/types'

export const NotFoundScreen = ({
  navigation,
}: RootStackScreenProps<'NotFound'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn&apos;t exist.</Text>

      <TouchableOpacity
        onPress={React.useCallback(
          () => navigation.replace('Root'),
          [navigation],
        )}
        style={styles.link}
      >
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    color: '#2e78b7',
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
