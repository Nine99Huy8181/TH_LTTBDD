import {View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, ToastAndroid} from 'react-native';
import React, {useState} from 'react';

export default Discount = ({productInfor, quantity, formatCurrency, handleSelectDiscount, showDiscountModal, setShowDiscountModal}) => {
    const discounts = [
    {
      id: '1',
      code: 'SAVE10',
      name: 'Giảm 10% cho đơn hàng từ 100.000đ',
      discount: 10,
      minOrder: 100000,
    },
    {
      id: '2',
      code: 'SAVE20',
      name: 'Giảm 20% cho đơn hàng từ 200.000đ',
      discount: 20,
      minOrder: 200000,
    },
    {
      id: '3',
      code: 'SAVE5',
      name: 'Giảm 5% không điều kiện',
      discount: 5,
      minOrder: 0,
    },
  ]

  const renderDiscountItem = ({item}) => {
    const subtotal = productInfor.price * quantity;
    const canApply = subtotal >= item.minOrder;
    return(
      <TouchableOpacity
        style={[
          styles.discountItem,
          !canApply && styles.discountItemDisabled
        ]}
        onPress={() => handleSelectDiscount(item)}
        disabled={!canApply}
      >
        <Text style={styles.discountCode}>{item.code}</Text>
        <Text style={styles.discountName}>{item.name}</Text>
        {
          !canApply && (
            <Text style={styles.discountError}>
              Cần đơn hàng tối thiểu {formatCurrency(item.minOrder)}
            </Text>
          )
        }
      </TouchableOpacity>
    );
  };


  return(
    <View  style={styles.container}>
      <View style={styles.firstContainer}>
        <Text>Ma giam gia da luu</Text>
        <TouchableOpacity style={{marginLeft: 16}}>
            <Text style={{color: 'blue', fontWeight: 'bold'}}>Xem tai day</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.secondContainer}>
        <TouchableOpacity style={styles.codeDiscount}
          onPress={() => setShowDiscountModal(true)}
        >
          <View style={{backgroundColor: 'green', width: 40, height: 20, marginHorizontal: 10}}></View>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Ma giam gia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.apply}
          onPress={() => 
          ToastAndroid.showWithGravity(
            'Thông báo ở giữa!',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          )}
        >
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold', }}>Ap dung</Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={showDiscountModal}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setShowDiscountModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text  style={{fontSize: 18, fontWeight: 'bold', color: 'green'}}>Chon ma giam gia</Text>
              <TouchableOpacity
                onPress={() => setShowDiscountModal(false)}
              >
                <Text style={{fontSize: 18, fontWeight: 'bold', color: 'red'}}>X</Text>
              </TouchableOpacity>
            </View>
            <FlatList
                data={discounts}
                keyExtractor={(item) => item.id}
                renderItem={renderDiscountItem}
              />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 15,
    backgroundColor: 'white'
  },
  firstContainer:{
    flexDirection: 'row',
    marginBottom: 40
  },
  secondContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  codeDiscount: {
    width: '65%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 5
  },
  apply:{
    backgroundColor: '#0A5EB7',
    padding: 10,
    borderRadius: 5
  },
  modalOverlay:{
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent:{
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 8,
    maxHeight: '80%',
    width: '90%'
  },
  discountItem:{
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
    discountItemDisabled: {
    opacity: 0.5,
  },
  discountCode: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  discountName: {
    fontSize: 14,
    marginTop: 4,
  },
  discountError: {
    fontSize: 12,
    color: '#e53e3e',
    marginTop: 4,
  },
})