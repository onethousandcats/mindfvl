import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../ui/Buttons";

export const Footer = () => {
    const router = useRouter();

    const createNew = () => {
        router.push(`/habit/new`);
    }

    return (
        <View style={styles.footer}>
            <Button onPress={createNew}>
                <Ionicons name="add" size={16} />
                <Text>Add Doing</Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({ 
    footer: {
        backgroundColor: '#ffffff',
        padding: 20,
        paddingHorizontal: 30,
        alignItems: 'flex-end',
        marginBottom: 20,
    },
});