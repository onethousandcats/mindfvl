import { Button, ClearButton } from "@/components/ui/Buttons";
import { Header } from "@/components/ui/Header";
import { Select, TextBox } from "@/components/ui/Input";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function NewHabit() {
    const router = useRouter();

    const [frequency, setFrequency] = useState("");

    const goBack = () => {
        router.back();
    }

    const freqOptions = ["Daily", "Weekly", "Monthly"];
    const durationOptions = ["Week", "Month", "Year"];

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Header>Create Doing</Header>
                <View style={{ width: '100%' }}>
                    <TextBox label='What do you want to do?' />
                    <Select label='How often do you want to do it?' options={freqOptions} />
                    <Select label='How long do you want to do it for?' options={durationOptions} />
                </View>
            </View>
            <View style={styles.footer}>
                <Button onPress={goBack} text="Create" />
                <ClearButton onPress={goBack} text="Cancel" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 40,
        marginTop: 40,
    },
    content: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 40,
    },
    footer: {
        gap: 20,
        marginBottom: 40,
    }
});