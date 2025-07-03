import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../ui/Buttons";

export const Footer = () => {
    const router = useRouter();

    const goBack = () => {
        router.back();
    }

    return (
        <View style={styles.footer}>
            <Button onPress={goBack}>
                <Ionicons name="add" size={16} />
                <Text>Add Doing</Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({ 
    footer: {
        backgroundColor: '#ffffff',
        padding: 16,
        alignItems: 'flex-end',
    },
});