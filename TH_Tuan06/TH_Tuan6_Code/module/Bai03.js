import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screen/Bai03/HomeScreen';
import SearchScreen from '../screen/Bai03/SearchScreen';
import ProfileScreen from '../screen/Bai03/ProfileScreen';

export default Bai03 = () => {
  const Tab = createBottomTabNavigator();

  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) =>({
          tabBarIcon: ({size, color}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Search') {
              iconName = 'search-outline';
            } else {
              iconName = 'person-outline';
            }
            return <Icon name={iconName} size={size} color={color}/>;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Search" component={SearchScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}