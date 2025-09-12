import {View, Text, TouchableOpacity} from 'react-native';

export default Voucher = () => {
  return(
    <View style={{backgroundColor: 'white', padding: 15, marginTop: 15, flexDirection: 'row'}}>
      <Text style={{marginRight: 8, fontWeight: 'bold'}}>Ban co phieu qua tang Tiki/Got it/Urbox?</Text>
      <TouchableOpacity>
        <Text style={{color: 'blue', fontWeight: 'bold'}}>Nhap tai day?</Text>
      </TouchableOpacity>
    </View>
  );
}