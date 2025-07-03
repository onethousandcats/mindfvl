import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ 
      contentStyle: { 
        flex: 1, 
        backgroundColor: '#fff' 
      },
      headerShown: false 
    }} /> 
  );
}
