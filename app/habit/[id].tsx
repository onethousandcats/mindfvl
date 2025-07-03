import { Footer } from "@/components/doings/Footer";
import { Header } from "@/components/ui/Header";
import { $doings } from "@/stores/DoingsStore";
import { useStore } from "@nanostores/react";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function HabitScreen() {
    const { id } = useLocalSearchParams();
    const item = useStore($doings)[id as string];

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Header>{ item.title }</Header>
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
        gap: 30,
    },
    content: {
        marginHorizontal: 30,
        flex: 1,
    }
});