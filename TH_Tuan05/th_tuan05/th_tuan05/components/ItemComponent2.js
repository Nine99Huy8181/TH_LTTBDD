import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ItemComponent2({item}) {
  const renderStart = (start) => {
    switch(start){
      case 1: return(
        <Text>⭐</Text>
      );
      case 2: return(
        <Text>⭐⭐</Text>
      );
      case 3: return(
        <Text>⭐⭐⭐</Text>
      );
      case 4: return(
        <Text>⭐⭐⭐⭐</Text>
      );
      case 5: return(
        <Text>⭐⭐⭐⭐⭐</Text>
      );
    }
  }

  const formatCurrency = (amount) =>{
    return `${amount.toLocaleString('vi-VN')} đ`
  }

  return (
    <View style={{backgroundColor: '#f5f5f5', width: 180, marginVertical: 10, padding: 5, borderRadius: 5}}>
      <View>
              <Image style={{width: '100%', height: 120}} source={{uri: item.image}}/>      
      </View>
      <View  style={{}}>
        <Text>{item.name}</Text>
        <View style={{flexDirection: 'row'}}>
          {renderStart(item.rating)}
          <Text style={{marginStart: 5}}>({item.amount})</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{formatCurrency(item.price)} </Text>
          <Text style={{color: 'gray'}}>-{item.discount}%</Text>
        </View>
        
      </View>
    </View>
  );
}