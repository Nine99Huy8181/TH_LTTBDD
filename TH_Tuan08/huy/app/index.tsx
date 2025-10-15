import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';

// Define types for navigation params
type RootStackParamList = {
  index: undefined;
  tasklist: { name: string };
  addtask: undefined;
  edittask: { task: string };
};

export default function LoginScreen() {
  const [name, setName] = useState<string>('');

  const handleStart = () => {
    if (name.trim() === '') {
      alert('Vui lòng nhập tên');
      return;
    }
    if (name === 'Huy') {
      router.push({ pathname: '../tasklist', params: { name } });
    } else {
      alert('Tên không đúng');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MANAGE YOUR TASK</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Button title="GET STARTED →" onPress={handleStart} color="#00BFFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});