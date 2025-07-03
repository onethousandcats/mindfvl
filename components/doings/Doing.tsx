import { $doings } from '@/stores/DoingsStore';
import { Ionicons } from '@expo/vector-icons';
import { useStore } from '@nanostores/react';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text } from 'react-native';
import { ClearButton } from '../ui/Buttons';
import { Card } from '../ui/Card';

type DoingProps = {
    id: string,
};

export const Doing: React.FC<DoingProps> = ({ id }) => {
    const router = useRouter();
    const item = useStore($doings)[id];

    const [isCompleted, setIsCompleted] = useState(item.completed);

    const toggleComplete = () => {
        console.log(`Toggling completion`, item);
        item.completed = !item.completed;
        setIsCompleted(item.completed);
    };

    const goToHabit = () => {
        router.push(`/habit/${id}`);
    }
    
    return (
        <Card>
            <ClearButton onPress={goToHabit}>
                <Text style={{ textDecorationLine: isCompleted ? 'line-through' : 'none', }}>{ item.title }</Text>
            </ClearButton>
            <ClearButton onPress={toggleComplete}>
                <Ionicons name={isCompleted? "checkmark-circle" : "checkmark-circle-outline"} size={20} />
            </ClearButton>
        </Card>
    );
}  