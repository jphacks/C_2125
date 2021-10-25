import { FontAwesome } from '@expo/vector-icons'
import { ComponentProps } from 'react'

export const TabBarIcon = (props: {
  name: ComponentProps<typeof FontAwesome>['name']
  color: string
}) => {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
}
