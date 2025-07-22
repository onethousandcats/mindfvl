import { StyleSheet, Text, TextProps } from 'react-native';

export const Subheader: React.FC<TextProps> = ({ style, ...props }) => (
  <Text
    {...props}
    style={[styles.header, style]}
  />
);

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    fontWeight: '400',
  },
});
