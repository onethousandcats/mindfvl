import React, { FC } from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

type CardProps = {
  children: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
};

interface CardSubComponentProps {
  children: React.ReactNode;
}

type CardComponent = FC<CardProps> & {
  Row: FC<CardSubComponentProps>;
  Divider: FC;
};

export const Card: CardComponent = ({ children, style, onPress }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

Card.Row = ({ children }) => {
  return <View style={styles.row}>{children}</View>;
};

Card.Divider = () => {
  return (
    <View style={{ height: 1, backgroundColor: '#ccc', marginVertical: 10 }} />
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#0f0f0f',
    backgroundColor: '#ffffff',
    marginTop: 10,
    marginBottom: 10,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
