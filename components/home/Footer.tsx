import { $currentDate } from '@/stores/DateStore';
import { useStore } from '@nanostores/react';
import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Button } from '../ui/Buttons';

export const Footer = () => {
  const date = useStore($currentDate);
  const router = useRouter();

  const createNew = () => {
    router.push(`/habit/new`);
  };

  const setDate = (amount: number) => {
    const d = new Date(date);
    d.setUTCDate(d.getUTCDate() + amount);
    $currentDate.set(d.toISOString());
  };

  return (
    <View style={styles.footer}>
      <Button
        onPress={() => setDate(-1)}
        icon='chevron-back-outline'
      />
      <Button
        onPress={createNew}
        icon='calendar-outline'
      />
      <Button
        onPress={createNew}
        icon='add'
        text='New Doing'
      />
      <Button
        onPress={() => setDate(1)}
        icon='chevron-forward-outline'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 20,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
