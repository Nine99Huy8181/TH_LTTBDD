import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ItemComponent({item}) {
  return (
    <View style={{flexDirection: 'row', padding: 10, justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderColor: 'gray'}}>
      <View>
              <Image style={{width: 80, height: 70}} source={{uri: item.image}}/>      
      </View>
      <View  style={{width: 120}}>
        <Text>{item.name}</Text>
        <Text style={{color: 'gray'}}>{item.shop}</Text>
      </View>
      <View>
        <TouchableOpacity style={{backgroundColor: 'red', width: 80, height: 35}}>
          <Text style={{textAlign: 'center', lineHeight: 35, color: 'white'}}>Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}