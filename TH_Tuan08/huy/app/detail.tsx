import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Phone {
  id: number;
  name: string;
  brand: string;
  price: number;
  description: string;
  image: string;
}

interface ProductDetailParams {
  id?: string;
}

export default function ProductDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<ProductDetailParams>();
  const [phone, setPhone] = useState<Phone | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState("blue"); // Mặc định, vì API không có màu

  useEffect(() => {
    if (id) {
      fetchPhoneDetail(id);
    }
  }, [id]);

  const fetchPhoneDetail = async (phoneId: string) => {
    try{
    const response = await fetch(`https://68e239098943bf6bb3c5f78b.mockapi.io/phones/${phoneId}`);
      if (!response.ok) {
        const fullResponse = await fetch("https://68e239098943bf6bb3c5f78b.mockapi.io/phones");
        const allPhones: Phone[] = await fullResponse.json();
        const foundPhone = allPhones.find(p => p.id.toString() === phoneId);
        if (!foundPhone) throw new Error("Không tìm thấy sản phẩm");
        setPhone(foundPhone);
      } else {
        const data: Phone = await response.json();
        setPhone(data);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Lỗi khi tải chi tiết");
    } finally {
      setLoading(false);
    }
  }
let phoneImage = { uri: phone?.image || "" };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text>Đang tải chi tiết sản phẩm...</Text>
      </View>
    );
  }

  if (error || !phone) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Lỗi: {error || "Không có dữ liệu"}</Text>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text>Quay lại</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <View style={styles.container}>
      <Image source={phoneImage} style={styles.phoneImage} />
      <Text style={styles.title}>{phone.name}</Text>
      <Text style={styles.brand}>{phone.brand}</Text>
      <Text style={styles.description}>{phone.description}</Text>
      <Text style={styles.rating}>★★★★★ (Xem đánh giá)</Text> {/* Demo, có thể fetch thêm */}
      <Text style={styles.price}>{formatPrice(phone.price)} đ</Text>
      <Text style={styles.promo}>Ở ĐÂU RẺ HƠN, HOÀN TIỀN!</Text>

      <TouchableOpacity
        style={styles.colorButton}
        onPress={() => router.push({ pathname: "/color-selection", params: { color: selectedColor, id: id } })}
      >
        <Text style={styles.colorButtonText}>CHỌN MÀU (Demo)</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, alignItems: "center", backgroundColor: "#fff" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  phoneImage: { width: 150, height: 100, borderRadius: 12, marginBottom: 16 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 8 },
  brand: { fontSize: 18, color: "#666", textAlign: "center", marginBottom: 8 },
  description: { fontSize: 16, textAlign: "center", marginBottom: 16, lineHeight: 22 },
  rating: { fontSize: 18, color: "gold", textAlign: "center", marginBottom: 8 },
  price: { fontSize: 28, fontWeight: "bold", color: "#007AFF", textAlign: "center", marginBottom: 4 },
  promo: { fontSize: 14, color: "red", textAlign: "center", fontWeight: "bold", marginBottom: 20 },
  colorButton: { padding: 12, backgroundColor: "#e0e0e0", borderRadius: 8, width: "100%" },
  colorButtonText: { fontSize: 16, textAlign: "center" },
  error: { fontSize: 16, color: "red", marginBottom: 10 },
  backButton: { padding: 10, backgroundColor: "#007AFF", borderRadius: 5 },
});