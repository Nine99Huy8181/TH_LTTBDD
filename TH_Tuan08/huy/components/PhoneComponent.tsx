import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Phone{
    id: number;
    name: string;
    brand: string;
    price: number;
    description: string;
    image: string;
}
export const PhoneComponent = ({item} : {item: Phone}) =>{
    const router = useRouter();

    const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return(
        <TouchableOpacity
        style={styles.item}
        onPress={() => router.push({pathname: '/detail', params: {id: item.id.toString()}})}
        >
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <View style={styles.itemInfo}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemBrand}>{item.brand}</Text>
            <Text style={styles.itemPrice}>{formatPrice(item.price)} đ</Text>
            <Text style={styles.itemDesc} numberOfLines={2}>{item.description}</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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