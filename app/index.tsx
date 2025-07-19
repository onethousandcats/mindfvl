import { Doing } from "@/components/doings/Doing";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/ui/Header";
import { Subheader } from "@/components/ui/Subheader";
import { formattedDate } from "@/helpers/date";
import { $currentDate } from "@/stores/DateStore";
import { $doings } from "@/stores/DoingsStore";
import { useStore } from "@nanostores/react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

export default function Index() {
  const doings = useStore($doings);
  const currentDate = useStore($currentDate);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Header>Doings</Header>
          <Subheader>{formattedDate(currentDate.substring(0, 10))}</Subheader>
        </View>
        <ScrollView>
          {Object.entries(doings).map(([key, _]) => (
            <Doing key={key} id={key} />
          ))}
        </ScrollView>
      </SafeAreaView>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 100,
    marginHorizontal: 30,
    gap: 30,
  },
});
