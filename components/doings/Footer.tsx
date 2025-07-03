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
            {/* <Text style={{ fontSize: 16, color: '#888' }}>
                Made with ❤️ by Sen
            </Text> */}
            <Button onPress={goBack}>
                <Ionicons name="arrow-back" size={16} />
                <Text>Back</Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({ 
    footer: {  
        padding: 20,
        paddingHorizontal: 30,
        alignItems: 'center',
        marginBottom: 20,
    },
});