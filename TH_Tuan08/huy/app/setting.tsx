// app/settings.tsx
import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { toggleDarkMode, toggleNotifications } from '../logic/settingsLogic';

const SettingsScreen: React.FC = () => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const handleNotificationsToggle = () => {
    const newValue = !isNotificationsEnabled;
    setIsNotificationsEnabled(newValue);
    toggleNotifications(newValue);
  };

  const handleDarkModeToggle = () => {
    const newValue = !isDarkModeEnabled;
    setIsDarkModeEnabled(newValue);
    toggleDarkMode(newValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch value={isNotificationsEnabled} onValueChange={handleNotificationsToggle} />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch value={isDarkModeEnabled} onValueChange={handleDarkModeToggle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingText: {
    fontSize: 16,
  },
});

export default SettingsScreen;
