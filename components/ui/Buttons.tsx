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
        flexDirection: 'row',
        gap: 6,
        backgroundColor: '#9E9E9E',
        padding: 16,
        paddingHorizontal: 24,
        borderRadius: 20,
        alignItems: 'center',
    },
});
