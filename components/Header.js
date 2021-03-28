import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { first, second, third, fourth, fifth, white } from '../global/colorPalette';

const Header = (props) => {

  return (
    <View style={styles.header}>
      <Text style={styles.text}>
        {props.title}
      </Text>
    </View>
  )
}

Header.defaultProps = {
  title: 'Default Header Title',
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: first,
  },
  text: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  }
})

export default Header;