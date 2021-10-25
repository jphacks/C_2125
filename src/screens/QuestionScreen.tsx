import { StatusBar } from 'expo-status-bar'
import { Text, View, Button ,Icon, Box, Stack, Heading} from 'native-base'
import * as React from 'react'
import { Platform } from 'react-native'
import { EditScreenInfo } from '../components/EditScreenInfo'
import { ChatStackScreenProps } from '../navigation/types'
import { Ionicons } from "@expo/vector-icons"

export const QuestionScreen = ({ navigation, route }: ChatStackScreenProps<'Question'>) => {
  return (
    <View>
    {/* <View alignItems="center"　flex={1} justifyContent="center"> */}

      <Button startIcon={<Icon as={Ionicons} name="arrow-back"/>}colorScheme="blue" mr="70%" py="5%"
        _text={{
          fontSize: "2xl"
        }}
      > 
        戻る
      </Button>
      <Stack alignItems="center" space={5}>
        <Heading　size="xl" mt="10%">
          今日の質問
        </Heading>
        <Box
          bg="blue.100"
          rounded="3xl"
          p="10"

          _text={{
            fontSize: "2xl",
            fontWeight: "bold",
            letterSpacing: "2xl",
          }}
          shadow={5}
        >
          { route.params.text }
        </Box>
      </Stack>
      {/* ref: https://docs.nativebase.io/button */}
      <Button height="20%" mt="6%"
        endIcon={<Icon as={Ionicons} name="arrow-forward" size="xl" />} colorScheme="blue"
        _text={{
          fontSize: "4xl"
        }}
      >
        質問に答える
      </Button>
      
    </View>

    
  )
}