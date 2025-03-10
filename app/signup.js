import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Signup() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const handleSignUp = () => {
    console.log("🔥 Sign Up Button Pressed");

    if (!username || !password || !age) {
      console.log("🚨 Missing Fields: ", { username, password, age });
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    // ✅ Determine the correct dashboard based on age
    let dashboardRoute = "/dashboard";
    if (parseInt(age) < 8) {
      dashboardRoute = "/NoviceDashboard";
    } else if (parseInt(age) >= 8 && parseInt(age) <= 12) {
      dashboardRoute = "/IntermittentDashboard";
    } else {
      dashboardRoute = "/ExpertDashboard";
    }

    console.log("🔀 Redirecting to:", dashboardRoute);
    Alert.alert("Success", "Redirecting...");
    router.push(`${dashboardRoute}?age=${age}&username=${username}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Create an Account</Text>
        <TextInput placeholder="Username" style={styles.input} value={username} onChangeText={setUsername} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} value={password} onChangeText={setPassword} />
        <TextInput placeholder="Age" keyboardType="numeric" style={styles.input} value={age} onChangeText={setAge} />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ✅ Styles
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F0F2F5" },
    card: { width: "90%", backgroundColor: "white", padding: 20, borderRadius: 10, elevation: 3, alignItems: "center" },
    title: { fontSize: 22, fontWeight: "bold", marginBottom: 15, color: "#333" },
    input: { width: "100%", padding: 12, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, marginBottom: 15, fontSize: 16, backgroundColor: "#FAFAFA" },
    button: { backgroundColor: "#4CAF50", paddingVertical: 12, borderRadius: 8, width: "100%", alignItems: "center" },
    buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
  });
  