import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function SearchScreen() {
  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = (text: string) => {
    setSearchText(text);
    console.log("Searching for:", text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter search keyword..."
        value={searchText}
        onChangeText={handleSearch}
      />
      <Text style={styles.result}>
        {searchText ? `Searching: ${searchText}` : "No search query"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  result: {
    fontSize: 16,
    color: "#333",
  },
});
