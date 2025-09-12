import {View, Text, TouchableOpacity} from 'react-native';


export default Pay = ({total, formatCurrency, showToastSuccess}) => {
  return(
    <View style={{backgroundColor: 'white'}}>
      <View style={{marginTop: 15, padding: 15, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontWeight: 'bold', fontSize: 22, color: 'gray'}}>Thanh tien</Text>
        <Text style={{fontWeight: 'bold', fontSize: 22, color: 'red'}}>{formatCurrency(total)}</Text>
      </View>
      <View style={{margin: 15}}>
        <TouchableOpacity style={{backgroundColor: '#rgb(229 57 53)', padding: 15, borderRadius: 5}}
          onPress={showToastSuccess}
        >
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>TIEN THANH DAT HANG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}