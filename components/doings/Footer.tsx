import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { Button } from "../ui/Buttons";

export const Footer = () => {
    const router = useRouter();

    const goBack = () => {
        router.back();
    }

    return (
        <View style={{ padding: 10, alignItems: 'center' }}>
            {/* <Text style={{ fontSize: 16, color: '#888' }}>
                Made with ❤️ by Sen
            </Text> */}
            <Button onPress={goBack}>
                <Ionicons name="arrow-back" size={20} />
                <Text>Back</Text>
            </Button>
        </View>
    )
}