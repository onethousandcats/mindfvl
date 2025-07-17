import { Button, ClearButton } from "@/components/ui/Buttons";
import { Header } from "@/components/ui/Header";
import { Select, TextBox } from "@/components/ui/Input";
import { $doings } from "@/stores/DoingsStore";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function NewHabit() {
    const router = useRouter();

    const [frequency, setFrequency] = useState("");

    const goBack = () => {
        router.back();
    }

    const createDoing = () => {
        //const newId = uuidv4();

        $doings.set({
            ...$doings.get(),
            ['7']: {
                title: "test",
                completed: [],
            }
        });
    }

    const freqOptions = ["Daily", "Weekly", "Monthly"];
    const durationOptions = ["∞", "Weeks", "Months", "Years"];

    const [label, setLabel] = useState("");
    const [duration, setDuration] = useState(durationOptions[0]);

    const quantityOptions = Array.from({ length: 99 }, (_, i) => (i + 1).toString());

    return (
        <>
            <View style={styles.content}>
                <Header>Create Doing</Header>
                <ScrollView style={styles.form}>
                    <TextBox label='What do you want to do?' onChange={(text) => setLabel(text)} />
                    <Select label='How often do you want to do it?' options={freqOptions} />
                    <Select label='Do it on the magnitude of?' options={durationOptions} onChange={(text) => setDuration(text)} />
                    { duration !== durationOptions[0] && <Select label='And for how many?' options={quantityOptions} /> }
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <Button onPress={createDoing} text="Create" />
                <ClearButton onPress={goBack} text="Cancel" />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'column',
        gap: 40,
    },
    form: {
        flex: 1,
        flexDirection: 'column',
        gap: 10,
    },
    footer: {
        gap: 20,
        marginBottom: 40,
    }
});