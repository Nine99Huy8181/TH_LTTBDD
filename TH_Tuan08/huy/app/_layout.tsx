import { Stack } from 'expo-router';
import { StackScreenProps } from '@react-navigation/stack';

// Define the type for the navigation stack
type RootStackParamList = {
  index: undefined;
  tasklist: { name: string };
  addtask: undefined;
  edittask: { task: string }; // task is a JSON string
};

// Optional: Type for screen options
type ScreenOptions = {
  title?: string;
};

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#f8f8f8' },
        headerTintColor: '#000',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="index" options={{ title: '' } as ScreenOptions} />
      <Stack.Screen name="tasklist" options={{ title: '' } as ScreenOptions} />
      <Stack.Screen name="addtask" options={{ title: '' } as ScreenOptions} />
      <Stack.Screen name="edittask" options={{ title: '' } as ScreenOptions} />
    </Stack>
  );
}