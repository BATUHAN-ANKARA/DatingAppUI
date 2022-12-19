import React from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Input = ({inputMessage, onSendPress, setMessage}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Some Text'
        value={inputMessage}
        onChangeText={setMessage}
        style={styles.input}
      />
      <TouchableOpacity>
        <Ionicons name='ios-send' color='#fff' size={20} />
      </TouchableOpacity>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,2)',
    width: '85%',
    position: 'absolute',
    bottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  input: {
    fontSize: 11,
    paddingHorizontal: 10,
    flex: 1,
    color: '#fff ',
  },
})
