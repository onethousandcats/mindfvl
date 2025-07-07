import { StyleSheet, Text, TextInput, View } from 'react-native';

type TextBoxProps = {
    label: string,
};

export const TextBox: React.FC<TextBoxProps> = ({ label }) => {
    return (
        <View style={styles.textBox}>
            <Text>{ label }</Text>
            <TextInput style={styles.textBoxInput} />
        </View>
    )
}

const styles = StyleSheet.create({
    textBox: {
        gap: 10,
    },
    textBoxInput: {
        borderWidth: 2,
        padding: 16,
        borderRadius: 10,
        marginBottom: 30,
    }
})