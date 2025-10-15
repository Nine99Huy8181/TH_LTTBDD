import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

// Define type for Task
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export default function EditTaskScreen() {
  const { task } = useLocalSearchParams<{ task: string }>(); // Type params
  const taskObj: Task = JSON.parse(task); // Parse task from JSON
  const [title, setTitle] = useState<string>(taskObj.title);

  const handleFinish = async () => {
    if (title.trim() === '') {
      alert('Vui lòng nhập tên nhiệm vụ');
      return;
    }
    try {
      await fetch(`${API_URL}/${taskObj.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...taskObj, title } as Task),
      });
      router.back();
    } catch (error) {
      console.error('Lỗi khi cập nhật task:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>UPDATE YOUR JOB</Text>
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