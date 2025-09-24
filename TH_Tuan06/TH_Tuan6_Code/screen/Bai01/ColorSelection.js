import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default ColorSelection = () =>{
  const navigation = useNavigation();
  const route = useRoute();
  const [previewColor, setPreviewColor] = useState(route.params?.currentColor || 'blue');
  const [colors, setColors] = useState({});
  useEffect(() => {
    fetch('https://67c81bf20acf98d07084e0cf.mockapi.io/colors')
    .then((res) => res.json())
    .then((data) => setColors(data))
  }, [])
  const getImages = () => {
    colors.map((color) => {
      
    })
  }
  return(
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image source={phoneImage} style={{width: 100, height: 120}} />
      <Text style={{fontSize: 20}}>Chọn một màu bên dưới:</Text>
      <TouchableOpacity 
        style={{backgroundColor: 'blue', width: 50, height: 50, margin: 10}}
        onPress={() => setPreviewColor('lightblue')}
      />
      <TouchableOpacity 
        style={{backgroundColor: 'red', width: 50, height: 50, margin: 10}}
        onPress={() => setPreviewColor('red')}
      />
      <TouchableOpacity 
        style={{backgroundColor: 'black', width: 50, height: 50, margin: 10}}
        onPress={() => setPreviewColor('black')}
      />
      <TouchableOpacity 
        style={{backgroundColor: 'gray', width: 50, height: 50, margin: 10}}
        onPress={() => setPreviewColor('gray')}
      />
      <TouchableOpacity
        style={{backgroundColor: 'green', padding: 10, borderRadius: 10}}
        onPress={() => {navigation.navigate('ProductDetail', {color: previewColor})}}
      >
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Xong</Text>
      </TouchableOpacity>
    </View>
  );
}