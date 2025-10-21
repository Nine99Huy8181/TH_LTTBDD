import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
 
export default function Bai03Layout(){
    return(
        <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          if (route.name === "index") {
            iconName = "home-outline";
          } else if (route.name === "search") {
            iconName = "search-outline";
          } else {
            iconName = "person-outline";
          }

          return <Ionicons name={iconName.toString()} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
        headerShown: true,
      })}
    >
      <Tabs.Screen
        name="index"
        options={{ title: "Home" }}
      />
      <Tabs.Screen
        name="search"
        options={{ title: "Search" }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile" }}
      />
    </Tabs>
    )
}