import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import useCachedResources from './src/hooks/useCachedResources'
import { Navigation } from './src/navigation'

const App = () => {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <NativeBaseProvider>
        <Navigation />

        <StatusBar />
      </NativeBaseProvider>
    )
  }
}

export default App
