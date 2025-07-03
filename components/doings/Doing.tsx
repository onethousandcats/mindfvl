import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';
import { Card } from '../ui/Card';

type DoingProps = {
    name: string,
};

const toggleComplete = (name: string) => {
    console.log('touched', name);
};

export const Doing: React.FC<DoingProps> = ({ name }) => {
    return (
        <Card onPress={() => toggleComplete(name)}>
            <Text>{ name }</Text>
            <Ionicons name="checkmark-circle-outline" size={20} />
        </Card>
    );
}  