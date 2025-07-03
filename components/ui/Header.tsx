import { StyleSheet, Text, TextProps } from 'react-native';

export const Header: React.FC<TextProps> = ({ style, ...props }) => (
    <Text {...props} style={[styles.header, style]} />
);

const styles = StyleSheet.create({
    header: {
        fontSize: 28,
    }
});