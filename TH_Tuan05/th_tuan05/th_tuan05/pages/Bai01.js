import {View, Image, Text, FlatList, StyleSheet, StatusBar, ScrollView} from "react-native";

import {useEffect, useState} from "react"
import ItemComponent from '../components/ItemComponent'

export default Bai01 = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('https://67c81bf20acf98d07084e0cf.mockapi.io/products').then(res => res.json())
    .then(data => setProducts(data))
    
  }, [])
  return(
    <View style={{position: 'relative'}}>
      <View>
        <View style={{backgroundColor: "#1BA9FF", flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
          <Image source={require("../assets/ant-design_arrow-left-outlined.png")}/>
          <Text style={{color: 'white', fontSize: 18}}>Chat</Text>
          <Image source={require("../assets/bi_cart-check.png")}/>
        </View>
        <View style={{padding: 10, backgroundColor: 'gray', borderBottomWidth: 1}}>
          <Text>
            Ban co thac mac voi san pham vua xem dung ngai chat voi shop
          </Text>
        </View>
        <ScrollView style={{height: 500}}>
          <FlatList
          data={products}
          renderItem={({item}) => <ItemComponent item={item}/>}
          keyExtractor={item => item.id}
        />
        </ScrollView>
      </View>
      <View style={{backgroundColor: "#1BA9FF", flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center', position: 'fixed', bottom: 0, width: '100%'}}>
        <Image source={require("../assets/Group10.png")}/>
        <Image source={require("../assets/Vector(Stroke).png")}/>
        <Image source={require("../assets/Vector1(Stroke).png")}/>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
});