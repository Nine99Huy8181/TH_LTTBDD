import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
  Alert,
  RefreshControl,
} from 'react-native';
import CartImg from '../components/CartImg'

export default Bai05 = () =>  {
  const [images, setImages] = useState([]);
  const [featureImages, setFeatureImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setReFreshing] = useState(false);
  const [viewMode, setViewMode] = useState('list');
  const [error, setError] = useState(null);

  useEffect(() => {
    try{
      fetch('https://68d27abacc7017eec54402e9.mockapi.io/images')
      .then((res) => res.json())
      .then((data) => {
        setImages(data)
      })
    }
    catch(error){
      setError('Unable load image');
    } finally{
      setLoading(false)
      setFeatureImages(images.slice(0, 4))
    }
  }, [])


  const handleChange = () =>{
    viewMode == 'list' ?  setViewMode('grid') : setViewMode('list')
  }
  return(
    <View style={{flexDirection: 'column'}}>
      <View style={{backgroundColor: 'violet', padding: 20}}>
        <Text style={{textAlign: 'center', fontSize: 20, color: 'white'}}>Galleray image</Text>
      </View>
      <View>
        <TouchableOpacity style={{padding: 10, backgroundColor: 'green'}}
          onPress={handleChange}
        >
          <Text>{viewMode === 'list' ?  'Grid' : 'List'}</Text>
        </TouchableOpacity>
      </View>
      {
        loading ? <ActivityIndicator size="large"/> :
        <View>
          <View style={{height: 160}}>
            <FlatList
              data={images.slice(0, 4)}
              keyExtractor={(item) => `f-${item.id}`}
              renderItem={({item}) => <CartImg item={item} type={true}/>}
              horizontal={true}
              showHorizontalScrollIndicator={false}
              contentContainerStyle={{padding: 10}}
              ItemSeparatorComponent={() => <View style={{width: 10}}/>}
            />
          </View>
          <View style={{height: 480}}>
            <FlatList
              key={viewMode}
              data={images}
              keyExtractor={(item) => `f-${item.id}`}
              renderItem={({item}) => <CartImg item={item} type={viewMode == 'grid'}/>}
              numColumns={viewMode === 'list' ? 1 : 2}
              horizontal={false}
              contentContainerStyle={{padding: 20}}
              columnWrapperStyle={viewMode === 'list' ? undefined : {justifyContent: 'space-around'}}
              ItemSeparatorComponent = {() => <View style={{height: 10}}/>}
            />
          </View>
        </View>
      }
      <View style={{flex: 1, backgroundColor: 'violet', position: 'fixed', bottom: 0, width: '100%'}}>
        <Text style={{textAlign: 'center', fontSize: 20, color: 'white'}}>{viewMode} images</Text>
      </View>
    </View>
  );
}