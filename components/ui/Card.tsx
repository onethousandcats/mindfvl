import { GestureResponderEvent, StyleSheet, TouchableOpacity } from 'react-native';

type CardProps = {
    children: React.ReactNode,
    onPress?: (event: GestureResponderEvent) => void;
};

export const Card: React.FC<CardProps> = ({ children, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            { children }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        marginTop: 10,
        marginBottom: 10,
        padding: 20,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})