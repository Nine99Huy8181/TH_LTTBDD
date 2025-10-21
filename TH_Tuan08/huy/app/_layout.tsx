import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function Layout(){
    return(
        <>
            <StatusBar barStyle="default"/>
            <Stack screenOptions={{headerShown: true}}>
                <Stack.Screen name="index" options={{title: "Trang San Pham"}}/>
                <Stack.Screen name="color-selection" options={{title: "Color"}}/>
            </Stack>
        </>
    )
}