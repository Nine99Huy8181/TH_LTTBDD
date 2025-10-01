import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


function WelcomeScreen({ navigation }) {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch('https://67c81bf20acf98d07084e0cf.mockapi.io/colors')
    .then(res => res.json())
    .then(data => setBikes(data))
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.subText}>A premium online store for sporter and their stylish choice</Text>
      <Image source={{uri: 'https://res.cloudinary.com/dkokkltme/image/upload/v1759277055/bione-removebg-preview_zgl9nf.png'}} style={styles.welcomeImage} />
      <Text style={styles.title}>POWER BIKE SHOP</Text>
      <Button title="Get Started" onPress={() => navigation.navigate('Bikes', {bikes})} color="#FF0000" />
    </View>
  );
}

function BikesScreen({ route, navigation }) {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const {bikes} = route.params

  const filteredBikes = bikes.filter(bike =>
    (category === 'All' || bike.type === category) &&
    bike.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.containerList}>
      <Text style={styles.header}>The world's Best Bike</Text>
      <View style={styles.categoryContainer}>
        {['All', 'Roadbike', 'Mountain'].map(cat => (
          <TouchableOpacity
            key={cat}
            style={[styles.categoryButton, category === cat && styles.selectedCategory]}
            onPress={() => setCategory(cat)}
          >
            <Text style={styles.categoryText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredBikes}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.bikeItem}
            onPress={() => navigation.navigate('Detail', { bike: item })}
          >
            <Image source={item.image} style={styles.bikeImage} />
            <View>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'gray'}}>{item.name}</Text>
              <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 16}}>${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function DetailScreen({ route, navigation }) {
  const { bike } = route.params;

  return (
    <View style={styles.containerDetail}>
      <View style={{margin: 20}}>
        <Image source={bike.image} style={styles.detailImage} />
        <Text style={{fontWeight: 'bold', fontSize: 25}}>{bike.name}</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'gray'}}>{bike.discount}OFF {bike.price} {bike.pre_price}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 22, marginVertical: 10}}>Description</Text>
        <Text>{bike.descriptions}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 20}}>
          <Image style={{width: 40, height: 40}} source={require('./assets/heart.png')}/>
          <TouchableOpacity style={{backgroundColor: '#FF0000', width: 260, padding: 10, borderRadius: 10}}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
              Add to card
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text>&lt;</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', flexDirection:'column', justifyContent: 'center', alignItems: 'center' },
  subText: { fontSize: 16, textAlign: 'center', marginBottom: 10 },
  welcomeImage: { width: 200, height: 200, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  header: { fontSize: 20, marginBottom: 10, color: '#FF0000' },
  categoryContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  categoryButton: { padding: 10, borderRadius: 5, backgroundColor: '#f0f0f0' },
  selectedCategory: { backgroundColor: '#FF0000', color: '#fff' },
  categoryText: { fontSize: 16 },
  searchInput: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 20, borderRadius: 5 },
  bikeItem: {
      backgroundColor: '#F7BA8326',
      width: 160,
      height: 150,
      padding: 10,
      margin: 10,
      borderRadius: 10,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'

  },
  bikeImage: { width: 100, height: 100, marginRight: 10 },
  detailImage: { width: '100%', height: 200, marginBottom: 20 },
  backButton: { position: 'absolute', top: 10, left: 10 },
});

export default function Bai00() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: '' }} />
        <Stack.Screen name="Bikes" component={BikesScreen} options={{ title: '' }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: '' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}