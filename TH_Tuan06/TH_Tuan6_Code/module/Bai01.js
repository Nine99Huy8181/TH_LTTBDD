import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetail from '../screen/Bai01/ProductDetail'
import ColorSelection from '../screen/Bai01/ColorSelection'

const Stack = createStackNavigator();

export default Bai01 = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductDetail">
        <Stack.Screen name="ProductDetail" component={ProductDetail}/>
        <Stack.Screen name="ColorSelection" component={ColorSelection}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}