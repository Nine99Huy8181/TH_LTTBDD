import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile Screen</Text>
      <Image
        source={{ uri: 'https://res.cloudinary.com/dkokkltme/image/upload/v1758641111/vs_blue_aa8io7.png' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Nguyen Quoc Huy</Text>
      <Text style={styles.email}>nguyenquochuy@gmail.com</Text>
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