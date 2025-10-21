// app/profile.tsx
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { User } from '../types/user';

const user: User = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
};

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Profile</Text>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
});

export default ProfileScreen;
