import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { first, second, third, fourth, fifth, white, lighterGrey, lightGrey, grey } from '../global/colorPalette';

const ListItem = ({ item, deleteItem }) => {

  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>

        <Text style={styles.listItemText}>
          {item.name}
        </Text>

        <Icon
          name='remove'
          size={20}
          color='firebrick'
          onPress={() => deleteItem(item.id)}
          style={styles.removeBtn}
        />

      </View>
    </TouchableOpacity>

  )
}

ListItem.defaultProps = {
  item: {
    id: 'example-id',
    name: 'example item name',
  }
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: lighterGrey,
    borderBottomWidth: 1,
    borderColor: lightGrey,
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 20,
    color: fifth,
  },
  removeBtn: {
    borderWidth: 1,
    borderColor: 'firebrick',
    paddingTop: 4,
    paddingRight: 3,
    paddingBottom: 3,
    paddingLeft: 6,
  }
})

export default ListItem;