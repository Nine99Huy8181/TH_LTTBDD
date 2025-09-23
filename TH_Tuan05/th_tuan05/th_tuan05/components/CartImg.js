import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

export default CartImg = ({item, type}) => {
  return(
      type ? 
      (    <View style={{width: 150, height: 120, backgroundColor: '#f5f5f5', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 10
      , borderRadius: 10
    }}>
      <View>
        <Image style={{width: 150, height: 100, borderRadius: 10}} source={{uri: item.url}}/>
      </View>
      <Text style={{color: 'green', fontSize: 14, fontWeight: 'bold'}}>{item.title}</Text>
    </View>) :
    (
          <View style={{width: "90%", height: 250, backgroundColor: '#f5f5f5', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: 10
      , borderRadius: 10, margin: 'auto'
    }}>
      <View>
        <Image style={{width: 250, height: 180, borderRadius: 10}} source={{uri: item.url}}/>
      </View>
      <Text style={{color: 'green', fontSize: 14, fontWeight: 'bold'}}>{item.title}</Text>
    </View>
    )
  );
}
