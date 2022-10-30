import { TouchableHighlight, Text, Pressable, View } from 'react-native'

export interface ButtonProps {
  onPress: () => void
  text: string
}

export const Button = ({ onPress, text }: ButtonProps) => {
  return (
    <View>
      <TouchableHighlight
        onPress={onPress}
        style={{
          backgroundColor: 'rgb(4,99,75)',
          paddingVertical: 10,
          paddingHorizontal: 32,
          borderRadius: 6,
          alignSelf: 'flex-start',
        }}
        underlayColor="rgb(13 ,148, 136)"
      >
        <Text style={{ color: 'white', fontWeight: '500', fontSize: 14 }}>
          {text}
        </Text>
      </TouchableHighlight>
    </View>
  )
}
