import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import ProductsScreen from '../screen/Bai04/ProductsScreen';
import FavoritesScreen from '../screen/Bai04/FavoritesScreen';
import ProductDetailsScreen from '../screen/Bai04/ProductDetailsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () =>{
  return(
     <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string;
          if (route.name === 'Products') {
            iconName = 'list-outline';
          } else {
            iconName = 'heart-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Products" component={ProductsScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Favorites" component={FavoritesScreen} options={{headerShown: false}}/>
    </Tab.Navigator>
  )
}

export default Bai04 = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabNavigator} options={{headerShown: false}}/>
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ title: 'Product Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}