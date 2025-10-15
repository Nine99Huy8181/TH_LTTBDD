import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';

// Define type for Task (for API payload)
interface Task {
  title: string;
  completed: boolean;
}

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export default function AddTaskScreen() {
  const [title, setTitle] = useState<string>('');

  const handleFinish = async () => {
    if (title.trim() === '') {
      alert('Vui lòng nhập tên nhiệm vụ');
      return;
    }
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, completed: false } as Task),
      });
      router.back();
    } catch (error) {
      console.error('Lỗi khi thêm task:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ADD YOUR JOB</Text>
      <TextInput
        style={styles.input}
        placeholder="Input your job"
        value={title}
        onChangeText={setTitle}
      />
      <Button title="FINISH →" onPress={handleFinish} color="#00BFFF" />
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