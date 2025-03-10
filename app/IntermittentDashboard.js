import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function IntermittentDashboard() {
  const { username } = useLocalSearchParams(); // ✅ Get the username from route params

  return (
    <View style={styles.container}>
      {/* Welcome Text */}
      <Text style={styles.title}>WELCOME BACK</Text>
      <Text style={styles.username}>{username ? username.toUpperCase() : "USER"}</Text>

      {/* Profile Image */}
      <Image source={require("../assets/profile.png")} style={styles.profileImage} />

      {/* Games Grid (2x2) */}
      <View style={styles.gameGrid}>
        <TouchableOpacity style={styles.gameButton}>
          <Image source={require("../assets/wordscramble.png")} style={styles.gameIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.gameButton}>
          <Image source={require("../assets/math.png")} style={styles.gameIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.gameButton}>
          <Image source={require("../assets/memory.png")} style={styles.gameIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.gameButton}>
          <Image source={require("../assets/hangman.png")} style={styles.gameIcon} />
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Image source={require("../assets/settings.png")} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/home.png")} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/profile.png")} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ✅ Styles for Intermittent Dashboard
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B3E5FC",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    color: "#333",
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 20,
  },
  gameGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "80%",
  },
  gameButton: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 15,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  gameIcon: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  bottomNav: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    elevation: 5,
  },
  navIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
