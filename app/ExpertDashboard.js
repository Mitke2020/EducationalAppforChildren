import { View, Text, StyleSheet, Image } from "react-native";

export default function ExpertDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Expert Learner!</Text>
      <Image source={{ uri: "https://via.placeholder.com/100" }} style={styles.image} />
      <Text style={styles.description}>Challenge yourself with history, geography, and logic puzzles.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6FA",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 15,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
});
