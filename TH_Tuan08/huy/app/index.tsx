import { PhoneComponent } from "@/components/PhoneComponent";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Phone{
    id: number;
    name: string;
    brand: string;
    price: number;
    description: string;
    image: string;
}

export default function ProductDetailScreen() {
  const router = useRouter();
  const [phones, setPhones] =  useState<Phone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPhones();
  }, []);

  const fetchPhones = async () => {
    try{
        const res = await fetch('https://68e239098943bf6bb3c5f78b.mockapi.io/phones');
        if(!res.ok) {
            throw new Error("Loi khi fetch");
        }
        const data: Phone[] = await res.json();
        setPhones(data);
    } catch(err){
        setError(err instanceof Error ? err.message: "Loi khong xac dinh");
    } finally{
        setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text>Đang tải danh sách điện thoại...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Lỗi: {error}</Text>
        <TouchableOpacity onPress={fetchPhones} style={styles.retryButton}>
          <Text>Thử lại</Text>
        </TouchableOpacity>
      </View>
    );
  }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Danh sách điện thoại</Text>
            <FlatList
                data={phones}
                renderItem={({item}) => <PhoneComponent item={item}/>}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  list: { paddingBottom: 20 },
  item: {
    flexDirection: "row",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    elevation: 2,
  },
  itemImage: { width: 80, height: 80, borderRadius: 8 },
  itemInfo: { flex: 1, marginLeft: 12, justifyContent: "center" },
  itemName: { fontSize: 18, fontWeight: "bold" },
  itemBrand: { fontSize: 16, color: "#666", marginVertical: 4 },
  itemPrice: { fontSize: 20, fontWeight: "bold", color: "#007AFF" },
  itemDesc: { fontSize: 14, color: "#999" },
  center: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  error: { fontSize: 16, color: "red", marginBottom: 10 },
  retryButton: { padding: 10, backgroundColor: "#007AFF", borderRadius: 5 },
});