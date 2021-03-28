import React, { useState } from 'react';

import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { white } from './global/colorPalette';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItemSection from './components/AddItemSection';

const App = () => {

  const [items, setItems] = useState([
    // { id: uuidv4(), name: 'Milk' },
    // { id: uuidv4(), name: 'Eggs' },
    // { id: uuidv4(), name: 'Bread' },
    // { id: uuidv4(), name: 'Juice' },
  ]);

  const deleteItem = (itemId) => {

    const newItems = items.filter(item => item.id !== itemId);

    setItems(newItems);
  }

  const addItem = (itemName) => {

    if (itemName) {

      const newItems = [{ id: uuidv4(), name: itemName }, ...items];
      setItems(newItems);

    }
    // else {
    //   Alert.alert('Error', 'Please enter the item name.', [{ text: 'Ok' }]);
    // }

  }

  return (
    <View style={styles.container}>
      <Header title={'Shopping List'} />

      <AddItemSection addItem={addItem} />

      <FlatList
        data={items}
        renderItem={({ item }) => (

          <ListItem
            item={item}
            deleteItem={deleteItem}
          />
        )}
      />

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
})

export default App;