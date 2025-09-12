import {SafeAreaView, View, ToastAndroid} from 'react-native'
import InforProduct from '../components/InforProduct'
import Discount from '../components/Discount'
import Voucher from '../components/Voucher'
import Provisional from '../components/Provisional'
import Pay from '../components/Pay'
import React, {useState, useMemo} from 'react'

export default Page_Bai01 = () => {
  const productData = {
    id: 1,
    name: 'Nguyen ham tich phan ung dung',
    description: 'Cung cap boi tiki trading',
    price: 141800,
    originPrice: 150000,
    image: 'book.png',
  }

  const [quantity, setQuantity] = useState(1);
  const [selectedDiscount, setSelectedDiscount] = useState(null);
  const [showDiscountModal, setShowDiscountModal] = useState(false);

  const calculations = useMemo(() => {
    const subtotal = productData.price * quantity;
    let discount = 0;
    if(selectedDiscount && subtotal >= selectedDiscount.minOrder){
      discount = (subtotal * selectedDiscount.discount)/100;
    }

    const total = subtotal - discount;
    
    return{
      subtotal,
      discount,
      total
    }

  }, [quantity, selectedDiscount, productData.price]);

  const formatCurrency = (amount) => {
    return `${amount.toLocaleString('vi-VN')} đ`
  }
  const handleQuantityChange = (type) => {
    if(type === 'increase'){
      setQuantity(prev => prev + 1);
    }
    else if(type === 'decrease' && quantity > 1){
      setQuantity(prev => prev - 1);
    }
  }

  const handleSelectDiscount = (discount) => {
    const subtotal = productData.price * quantity;
    if(subtotal >= discount.minOrder){
      setSelectedDiscount(discount);
      setShowDiscountModal(false)
    }
    else {
      //
    }
  }

  const showToastSuccess = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Dat hang thanh cong!',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      0,
      50
    );
  }

  return (
    <SafeAreaView style={{backgroundColor: '#E4E0E1', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
      <View>
        <InforProduct
          productInfor={productData}
          onChangeQuantity={handleQuantityChange}
          quantity={quantity}
          formatCurrency={formatCurrency}
        />
        <Discount
          productInfor={productData}
          quantity={quantity}
          formatCurrency={formatCurrency}
          handleSelectDiscount={handleSelectDiscount}
          showDiscountModal={showDiscountModal}
          setShowDiscountModal={setShowDiscountModal} 
        />
        <Voucher/>
        <Provisional
          calculations={calculations}
          selectedDiscount={setSelectedDiscount}
          formatCurrency={formatCurrency}
        />
      </View>
      <View>
        <Pay
          total={calculations.total}
          formatCurrency={formatCurrency}
          showToastSuccess={showToastSuccess}
        />
      </View>
    </SafeAreaView>
  );
}

