import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, useFocusEffect, router } from 'expo-router';

// Define types for navigation params
type RootStackParamList = {
  index: undefined;
  tasklist: { name: string };
  addtask: undefined;
  edittask: { task: string };
};

// Define type for Task
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export default function TaskListScreen() {
  const { name } = useLocalSearchParams<{ name: string }>(); // Type params
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState<string>('');

  const fetchTasks = async () => {
    try {
      const response = await fetch(`${API_URL}?_limit=10`);
      const data: Task[] = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Lỗi khi lấy tasks:', error);
    }
  };

  // Use useFocusEffect to fetch tasks when screen is focused
  useFocusEffect(
    useCallback(() => {
      fetchTasks();
    }, [])
  );

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hi {name}</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredTasks}
        keyExtractor={(item: Task) => item.id.toString()}
        renderItem={({ item }: { item: Task }) => (
          <View style={styles.taskItem}>
            <Text>{item.title}</Text>
            <TouchableOpacity
              onPress={() =>
                router.push({ pathname: '/edittask', params: { task: JSON.stringify(item) } })
              }
            >
              <Text style={styles.editIcon}>✏️</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push('/addtask')}
      >
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 20,
    marginBottom: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  editIcon: {
    color: 'red',
    fontSize: 18,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#00BFFF',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    color: 'white',
    fontSize: 30,
  },
});