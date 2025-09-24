import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const PRODUCTS = [
  { id: '1', name: 'Laptop', price: 999 },
  { id: '2', name: 'Smartphone', price: 699 },
  { id: '3', name: 'Headphones', price: 99 },
  { id: '4', name: 'Tablet', price: 499 },
];

const ProductsScreen: React.FC = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('ProductDetails', { id: item.id, name: item.name, price: item.price })}
    >
      <Text style={styles.itemText}>{item.name} - ${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Products</Text>
      <FlatList
        data={PRODUCTS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
});

export default ProductsScreen;