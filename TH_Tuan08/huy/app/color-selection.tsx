import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ColorSelectionParams {
  color?: string;
}

export default function ColorSelectionScreen() {
  const router = useRouter();
  const { color } = useLocalSearchParams<ColorSelectionParams>();
  const [previewColor, setPreviewColor] = useState(color || "blue");

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
        onPress={() => router.push({ pathname: "/", params: { color: previewColor } })}
      >
        <Text style={styles.doneButtonText}>Xong</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, alignItems: "center" },
  phoneImage: { width: 150, height: 200 },
  title: { fontSize: 16, marginVertical: 16 },
  colorSwatch: { width: 40, height: 40, marginVertical: 8, borderRadius: 8 },
  doneButton: { backgroundColor: "blue", padding: 16, marginTop: 12, borderRadius: 8 },
  doneButtonText: { color: "white", fontWeight: "bold" },
});