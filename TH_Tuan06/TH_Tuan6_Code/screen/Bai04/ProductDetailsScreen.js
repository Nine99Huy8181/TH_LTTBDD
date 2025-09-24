import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';



const ProductDetailsScreen = () => {
  const route = useRoute();
  const { id, name, price } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product Details</Text>
      <Text style={styles.detail}>ID: {id}</Text>
      <Text style={styles.detail}>Name: {name}</Text>
      <Text style={styles.detail}>Price: ${price}</Text>
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
  detail: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default ProductDetailsScreen;