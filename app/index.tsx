import { Doing } from "@/components/doings/Doing";
import { Header } from "@/components/ui/Header";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

export default function Index() {
  const doings = [
    { name: `Don't eat sugar`},
    { name: `Clean for 10 minutes`},
    { name: `Work on videogame`},
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header>Doings</Header>
      </View>
      <ScrollView style={styles.doings}>
        { doings.map((d) => (
          <Doing name={d.name} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 80,
    margin: 30,
    gap: 30,
  },
})
