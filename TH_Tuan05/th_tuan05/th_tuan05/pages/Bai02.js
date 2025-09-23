import {View, Image, Text, FlatList, StyleSheet, StatusBar, ScrollView, TouchableOpacity, ActivityIndicator, SafeAreaView} from "react-native";

import {useEffect, useState} from "react"
import ItemComponent2 from '../components/ItemComponent2'

export default Bai01 = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try{
      const res = await fetch('https://67c81bf20acf98d07084e0cf.mockapi.io/customers');
      const data = await res.json();
      setProducts(data);
    } catch(error){
      console.log(error)
    } finally{
      setLoading(false);
    }
  };

  return(
      <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
      <View style={{backgroundColor: '#2196F3', flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
        <TouchableOpacity>
          <Image source={require('../assets/ant-design_arrow-left-outlined.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{color: 'white', fontSize: 16}}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/bi_cart-check.png')}/>
        </TouchableOpacity>
      </View>

      <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#ebebeb'}}>
          <Text>
            Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
          </Text>      
      </View>
        {loading ? 
        <View style={{padding: 10}}>
          <ActivityIndicator size="large"/>
        </View>
        :
        <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <ItemComponent2 item={item}/>}
        numColumns={2}
        showVerticalScrollIndicator={true}
        contentContainerStyle={{paddingBottom: 80}}
        columnWrapperStyle={{justifyContent: 'space-around'}}
      />
      }

      <View style={{backgroundColor: '#2196F3', width: "100%",  flexDirection: 'row', justifyContent: 'space-between', padding: 10, position: 'fixed', bottom: 0}}>
        <TouchableOpacity>
          <Image source={require('../assets/Group10.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/Vector(Stroke).png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/Vector1(Stroke).png')}/>
        </TouchableOpacity>
      </View>
    </View>
      </SafeAreaView>
  );
}