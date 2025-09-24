import { View, Text, FlatList, StyleSheet } from 'react-native';


const FAVORITES = [
  { id: '2', name: 'Smartphone', price: 699 },
  { id: '3', name: 'Headphones', price: 99 },
];

const FavoritesScreen = () => {
  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name} - ${item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorites</Text>
      <FlatList
        data={FAVORITES}
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

export default FavoritesScreen;