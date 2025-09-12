import {View, SafeAreaView, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default InforProduct = ({productInfor,onChangeQuantity, quantity, formatCurrency}) => {
  return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={require('../assets/book.png')}/>
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.title}>{productInfor.name}</Text>
          <Text style={styles.title}>{productInfor.description}</Text>
          <Text style={styles.price}>{formatCurrency(productInfor.price)}</Text>
          <Text style={{color: 'gray', fontWeight: 'bold', textDecorationLine: 'line-through'}}>{formatCurrency(productInfor.originPrice)}</Text>
          <View style={styles.countContainer}>
            <View style={styles.creaseContainer}>
              <TouchableOpacity style={styles.buttonCrease}>
                <Text style={styles.textCrease} onPress={() => onChangeQuantity('decrease')}>-</Text>
              </TouchableOpacity>
              <Text style={{textAlign: 'center', fontSize: 20,fontWeight: 'bold', marginHorizontal: 10, lineHeight: 20}}>{quantity}</Text>
              <TouchableOpacity style={styles.buttonCrease} onPress={() => onChangeQuantity('increase')}>
                <Text style={styles.textCrease}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={{color: 'blue', fontWeight: 'bold'}}>Mua sau</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  imgContainer:{
    marginRight: 30
  },
  img:{
    width: 110,
    height: 140
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10
  },
  countContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  creaseContainer:{
    flexDirection: 'row'
  },

  price:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 8
  },
  buttonCrease:{
    backgroundColor:'gray',
    width: 24,
    height: 24,
  },
  textCrease:{
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold',
  }
})