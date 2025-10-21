import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ColorSelectionParams {
  color?: string;
  id?: string; // Thêm để quay về chi tiết với id
}

export default function ColorSelectionScreen() {
  const router = useRouter();
  const { color, id } = useLocalSearchParams<ColorSelectionParams>();
  const [previewColor, setPreviewColor] = useState(color || "blue");

  // Demo image dựa trên màu (giữ nguyên từ mã cũ, không phụ thuộc API)
  let phoneImage;
  if (previewColor === "lightblue") {
    phoneImage = { uri: "https://res.cloudinary.com/dkokkltme/image/upload/v1758641111/vs_blue_aa8io7.png" };
  } else if (previewColor === "red") {
    phoneImage = { uri: "https://res.cloudinary.com/dkokkltme/image/upload/v1758641111/vs_red_btvq0m.png" };
  } else if (previewColor === "black") {
    phoneImage = { uri: "https://res.cloudinary.com/dkokkltme/image/upload/v1758641111/vs_black_dsjafh.png" };
  } else {
    phoneImage = { uri: "https://res.cloudinary.com/dkokkltme/image/upload/v1758641111/vs_silver_otm6z6.png" };
  }

  return (
    <View style={styles.container}>
      <Image source={phoneImage} style={styles.phoneImage} />
      <Text style={styles.title}>Chọn một màu bên dưới:</Text>
      {["lightblue", "red", "black", "gray"].map((c) => (
        <TouchableOpacity
          key={c}
          style={[styles.colorSwatch, { backgroundColor: c }]}
          onPress={() => setPreviewColor(c)}
        />
      ))}
      <TouchableOpacity
        style={styles.doneButton}
        onPress={() => {
          // Quay về chi tiết với color mới và id
          router.push({ pathname: "/detail", params: { id: id || "1", color: previewColor } });
        }}
      >
        <Text style={styles.doneButtonText}>Xong</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, alignItems: "center", justifyContent: "center", backgroundColor: "#fff" },
  phoneImage: { width: 200, height: 400, borderRadius: 12, marginBottom: 20 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 20 },
  colorSwatch: { width: 30, height: 30, margin: 2, borderRadius: 30 },
  doneButton: { padding: 12, backgroundColor: "#007AFF", borderRadius: 8, marginTop: 20 },
  doneButtonText: { fontSize: 16, color: "white", textAlign: "center" },
});