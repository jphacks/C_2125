import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import { QueryClientProvider } from 'react-query'
import useCachedResources from './src/hooks/useCachedResources'
import { queryClient } from './src/lib/react-query'
import { Navigation } from './src/navigation'

const App = () => {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <NativeBaseProvider>
        <QueryClientProvider client={queryClient}>
          <Navigation />

          <StatusBar />
        </QueryClientProvider>
      </NativeBaseProvider>
    )
  }
}

export default App
