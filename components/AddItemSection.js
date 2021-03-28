import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { first, second, third, fourth, fifth, white, grey } from '../global/colorPalette';

const AddItemSection = ({ addItem }) => {

  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        placeholder='Add a new item...'
        placeholderTextColor={grey}
        style={styles.input}
        onChangeText={setText}
        value={text}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          setText('');
          addItem(text);
        }}
      >

        <Text style={styles.btnText}>
          <Icon name='plus' size={20} /> Add Item
        </Text>

      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
    color: fifth,
  },
  btn: {
    backgroundColor: third,
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: white,
    fontSize: 20,
    textAlign: 'center',
  }
})

export default AddItemSection;