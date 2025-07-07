import { Slot } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function Layout() {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <Slot />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 80,
        gap: 30,
    },
    content: {
        flex: 1,
        marginHorizontal: 30,
    }
});