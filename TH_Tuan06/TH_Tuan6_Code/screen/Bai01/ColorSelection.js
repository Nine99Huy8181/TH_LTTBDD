import React, { useState, useF } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default ColorSelection = () =>{
  const navigation = useNavigation();
  const route = useRoute();
  const [previewColor, setPreviewColor] = useState(route.params?.currentColor || 'blue');

  let phoneImage;
  if (previewColor === 'lightblue') {
    phoneImage = { uri: 'https://res.cloudinary.com/dkokkltme/image/upload/v1758641111/vs_blue_aa8io7.png' };
  } else if (previewColor === 'red') {
    phoneImage = { uri: 'https://res.cloudinary.com/dkokkltme/image/upload/v1758641111/vs_red_btvq0m.png' };
  } else if (previewColor === 'black') {
    phoneImage = { uri: 'https://res.cloudinary.com/dkokkltme/image/upload/v1758641111/vs_black_dsjafh.png' };
  } else {
    phoneImage = { uri: 'https://res.cloudinary.com/dkokkltme/image/upload/v1758641111/vs_silver_otm6z6.png' };
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