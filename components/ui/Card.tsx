import { GestureResponderEvent, StyleSheet, View } from 'react-native';

type CardProps = {
    children: React.ReactNode,
    onPress?: (event: GestureResponderEvent) => void;
};

export const Card: React.FC<CardProps> = ({ children, onPress }) => {
    return (
        <View style={styles.card}>
            { children }
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#0f0f0f',
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