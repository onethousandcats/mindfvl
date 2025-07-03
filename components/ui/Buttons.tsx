import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type ClearButtonProps = {
    onPress: () => void;
    children: React.ReactNode;
}

export const ClearButton: React.FC<ClearButtonProps> = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ }}>
            {children}
        </TouchableOpacity>
    );
}

export const Button: React.FC<ClearButtonProps> = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            {children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        flexDirection: 'row',
        gap: 14,
        backgroundColor: '#FFF',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
});
