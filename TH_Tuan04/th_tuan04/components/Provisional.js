import {View, Text, StyleSheet} from 'react-native';

export default Provisional = ({calculations, selectedDiscount, formatCurrency}) => {
  return (
    <View style={{backgroundColor: 'white', marginTop: 15, padding: 15, }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Tam tinh</Text>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'red'}}>{formatCurrency(calculations.subtotal)}</Text>
      </View>
      {
        selectedDiscount && calculations.discount > 0 && (
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
            <Text style={styles.summaryLabel}>Giảm giá ({selectedDiscount.discount}%)</Text>
            <Text style={[styles.summaryValue, styles.discountValue]}>
              -{formatCurrency(calculations.discount)}
            </Text>
          </View>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  summaryLabel: {
    fontSize: 14,
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '500',
  },
  discountValue: {
    color: '#e53e3e',
  },
})