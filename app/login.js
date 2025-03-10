import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log("🔥 Login Button Pressed");

    if (!username || !password) {
      console.log("🚨 Missing Fields: ", { username, password });
      Alert.alert("Error", "Please enter your username and password.");
      return;
    }

    try {
      console.log("📁 Fetching User Data from Local Storage...");
      const storedUser = await AsyncStorage.getItem("user");

      if (storedUser) {
        const { username: storedUsername, password: storedPassword, age } = JSON.parse(storedUser);
        
        if (username === storedUsername && password === storedPassword) {
          console.log("✅ Login Successful!");

          // ✅ Redirect user to correct dashboard based on age
          let dashboardRoute = "/dashboard";
          if (parseInt(age) < 8) {
            dashboardRoute = "/noviceDashboard";
          } else if (parseInt(age) >= 8 && parseInt(age) <= 12) {
            dashboardRoute = "/intermittentDashboard";
          } else {
            dashboardRoute = "/expertDashboard";
          }

          console.log("🔀 Redirecting to:", dashboardRoute);
          Alert.alert("Success", "Logged in successfully!");
          router.push(`${dashboardRoute}?age=${age}&username=${username}`);
        } else {
          console.log("❌ Incorrect Username or Password");
          Alert.alert("Login Failed", "Incorrect username or password.");
        }
      } else {
        console.log("❌ No user data found");
        Alert.alert("Login Failed", "User does not exist. Please sign up.");
      }
    } catch (error) {
      console.log("❌ Login Error: ", error.message);
      Alert.alert("Login Failed", "An error occurred.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Log In</Text>
        <TextInput placeholder="Username" style={styles.input} value={username} onChangeText={setUsername} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} value={password} onChangeText={setPassword} />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
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
