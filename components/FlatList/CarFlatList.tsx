import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { items } from '../../mocks/items';

export interface Item {
    id: number;
    car: string;
}


const renderItem = ({item}: {item: Item}) => (
    <Text>{item.car}</Text>
)
export default function Flatlistreutilizavel() {
  return (
    <View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}></FlatList>
    </View>
  )
}