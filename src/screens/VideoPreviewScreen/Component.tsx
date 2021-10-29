import { Box } from 'native-base'
import { FirebaseVideo } from '../../components/FirebaseVideo'

type ComponentProps = {
  path: string
}

export const Component = ({ path }: ComponentProps) => {
  return (
    <Box>
      <FirebaseVideo path={path} />
    </Box>
  )
}
