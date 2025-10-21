// app/index.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Home</Text>
      <Text style={styles.text}>This is the Home screen of the app.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default HomeScreen;
