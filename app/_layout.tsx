import { Stack } from 'expo-router';
import { Host } from 'react-native-portalize';

export default function RootLayout() {
  return (
    <Host>
      <Stack
        screenOptions={{
          contentStyle: {
            flex: 1,
            backgroundColor: '#fff',
          },
          headerShown: false,
        }}
      />
    </Host>
  );
}
