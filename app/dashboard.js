import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import NoviceDashboard from "./NoviceDashboard";
import IntermittentDashboard from "./IntermittentDashboard";
import ExpertDashboard from "./ExpertDashboard";

export default function Dashboard() {
  const { age } = useLocalSearchParams(); // Get the age from the URL

  const userAge = parseInt(age, 10);

  return (
    <View style={styles.container}>
      {userAge <= 7 && <NoviceDashboard />}
      {userAge >= 8 && userAge <= 12 && <IntermittentDashboard />}
      {userAge >= 13 && <ExpertDashboard />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F9FA",
    padding: 20,
  },
});
