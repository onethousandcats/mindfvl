import { $currentDate } from "@/stores/DateStore";
import { $doings, isCompleted } from "@/stores/DoingsStore";
import { Ionicons } from "@expo/vector-icons";
import { useStore } from "@nanostores/react";
import { useRouter } from "expo-router";
import { Text } from "react-native";
import { UnstyledButton } from "../ui/Buttons";
import { Card } from "../ui/Card";

type DoingProps = {
  id: string;
};

export const Doing: React.FC<DoingProps> = ({ id }) => {
  const router = useRouter();
  const item = useStore($doings)[id];
  const currentDate = useStore($currentDate);

  const completedToday = useStore(isCompleted(id));

  const toggleComplete = () => {
    const current = $doings.get();

    if (completedToday) {
      // remove from the list
      $doings.set({
        ...current,
        [id]: {
          ...current[id],
          completed: item.completed.filter(
            (c) => c.slice(0, 10) !== currentDate.slice(0, 10),
          ),
        },
      });
    } else {
      // add today to the list
      $doings.set({
        ...current,
        [id]: {
          ...current[id],
          completed: [...item.completed, currentDate],
        },
      });
    }

    console.log(`Toggling completion`, item);
  };

  const goToHabit = () => {
    router.push(`/habit/${id}`);
  };

  return (
    <Card style={ completedToday ? { backgroundColor: "#fafafa" } : {} }>
      <Card.Row>
        <UnstyledButton
          onPress={goToHabit}
          text={item.title}
          textStyle={{
            textDecorationLine: completedToday ? "line-through" : "none",
          }}
        />
        <UnstyledButton
          onPress={toggleComplete}
          icon={completedToday ? "checkmark-circle" : "checkmark-circle-outline"}
          iconSize={20}
        />
      </Card.Row>
      <Card.Divider />
      <Card.Row>
        <Text>{item.frequency}</Text>
        <Text><Ionicons name="flame" /> 8</Text>
        <Text>Days Remaining</Text>
      </Card.Row>
    </Card>
  );
};
