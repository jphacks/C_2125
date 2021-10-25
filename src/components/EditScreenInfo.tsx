import * as WebBrowser from 'expo-web-browser'
import { Pressable, Text, View } from 'native-base'

const handleHelpPress = () => {
  return WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet',
  )
}
export const EditScreenInfo = ({ path }: { path: string }) => {
  return (
    <View>
      <View alignItems="center" mx={50}>
        <Text fontSize={17} lineHeight={24} textAlign="center">
          Open up the code for this screen:
        </Text>

        <View borderRadius={3} my={7} px={1}>
          <Text>{path}</Text>
        </View>

        <Text fontSize={17} lineHeight={24} textAlign="center">
          Change any of the text, save the file, and your app will automatically
          update.
        </Text>
      </View>

      <View alignItems="center" my={5} pt={15}>
        <Pressable onPress={handleHelpPress} py={15}>
          <Text textAlign="center">
            Tap here if your app doesn&apos;t automatically update after making
            changes
          </Text>
        </Pressable>
      </View>
    </View>
  )
}
