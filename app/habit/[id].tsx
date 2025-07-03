import { Footer } from "@/components/doings/Footer";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HabitScreen() {
    const { id } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text>TEST {id}</Text>
            </View>
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 80,
        margin: 30,
        gap: 30,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});