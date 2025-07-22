import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity } from 'react-native';

type ButtonProps = {
  onPress: () => void;
  icon: string;
  text: string;
  iconSize: number;
  textStyle: TextStyle;
};

export const UnstyledButton: React.FC<ButtonProps> = ({
  onPress,
  icon,
  text,
  iconSize = 16,
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{}}
    >
      {icon !== undefined && (
        <Ionicons
          name={icon}
          size={iconSize}
        />
      )}
      {text !== undefined && <Text style={textStyle}>{text}</Text>}
    </TouchableOpacity>
  );
};

export const ClearButton: React.FC<ButtonProps> = ({
  onPress,
  icon,
  text,
  iconSize = 16,
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.general]}
    >
      {icon !== undefined && (
        <Ionicons
          name={icon}
          size={iconSize}
        />
      )}
      {text !== undefined && <Text style={textStyle}>{text}</Text>}
    </TouchableOpacity>
  );
};

export const Button: React.FC<ButtonProps> = ({
  onPress,
  icon,
  text,
  iconSize = 16,
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, styles.general]}
    >
      {icon !== undefined && (
        <Ionicons
          name={icon}
          size={iconSize}
        />
      )}
      {text !== undefined && <Text style={textStyle}>{text}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#9E9E9E',
    borderRadius: 26,
  },
  general: {
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
    paddingHorizontal: 20,
  },
});
