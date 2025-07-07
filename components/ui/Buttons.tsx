import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type ClearButtonProps = {
    onPress: () => void;
    children: React.ReactNode;
}

export const UnstyledButton: React.FC<ClearButtonProps> = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{}}>
            {children}
        </TouchableOpacity>
    );    
}

export const ClearButton: React.FC<ClearButtonProps> = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[ styles.general ]}>
            {children}
        </TouchableOpacity>
    );
}

export const Button: React.FC<ClearButtonProps> = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[ styles.button, styles.general ]}>
            {children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#9E9E9E',
        borderRadius: 20,
    },
    general: {
        flexDirection: 'row',
        gap: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        paddingHorizontal: 24,
    }
});
