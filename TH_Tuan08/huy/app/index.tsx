import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ProductDetailParams {
  color?: string;
}

export default function ProductDetailScreen() {
  const router = useRouter();
  const { color } = useLocalSearchParams<ProductDetailParams>();
  const [selectedColor, setSelectedColor] = useState(color || "blue");

  let phoneImage;
  if (selectedColor === "lightblue") {
    phoneImage = { uri: "https://res.cloudinary.com/dkokkltme/image/upload/v1758641111/vs_blue_aa8io7.png" };
  } else if (selectedColor === "red") {
    phoneImage = { uri: "https://res.cloudinary.com/dkokkltme/image/upload/v1758641111/vs_red_btvq0m.png" };
  } else if (selectedColor === "black") {
    phoneImage = { uri: "https://res.cloudinary.com/dkokkltme/image/upload/v1758641111/vs_black_dsjafh.png" };
  } else {
    phoneImage = { uri: "https://res.cloudinary.com/dkokkltme/image/upload/v1758641111/vs_silver_otm6z6.png" };
  }

  return (
    <View style={styles.container}>
      <Image source={phoneImage} style={styles.phoneImage} />
      <Text style={styles.title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <Text style={styles.rating}>★★★★★ (Xem 828 đánh giá)</Text>
      <Text style={styles.price}>1.790.000 đ</Text>
      <Text style={styles.oldPrice}>1.790.000 đ</Text>
      <Text style={styles.promo}>Ở ĐÂU RẺ HƠN HOÀN TIỀN ?</Text>

      <TouchableOpacity
        style={styles.colorButton}
        onPress={() => router.push({ pathname: "/color-selection", params: { color: selectedColor } })}
      >
        <Text style={styles.colorButtonText}>4 MÀU - CHỌN MÀU</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, alignItems: "center" },
  phoneImage: { width: 200, height: 300 },
  title: { fontSize: 18, fontWeight: "bold", marginVertical: 8 },
  rating: { fontSize: 14, marginVertical: 4 },
  price: { fontSize: 20, fontWeight: "bold", color: "red" },
  oldPrice: { fontSize: 16, textDecorationLine: "line-through", marginVertical: 4 },
  promo: { fontSize: 12, color: "red", marginVertical: 8 },
  colorButton: { borderWidth: 1, borderColor: "gray", padding: 8, marginVertical: 16, width: "80%" },
  colorButtonText: { textAlign: "center" },
  buyButton: { backgroundColor: "red", padding: 16, width: "100%", alignItems: "center" },
  buyButtonText: { color: "white", fontWeight: "bold" },
});