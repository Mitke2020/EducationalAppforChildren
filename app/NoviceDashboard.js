import { View, Text, Image, TouchableOpacity, StyleSheet, Animated, Dimensions } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";

const screenWidth = Dimensions.get("window").width; // Get screen width
const containerWidth = screenWidth * 0.6; // Set width to 80% of the screen

export default function NoviceDashboard() {
  const { username } = useLocalSearchParams(); // Get the username from the URL
  const [scaleValue] = useState(new Animated.Value(1));

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scaleValue, { toValue: 0.9, duration: 100, useNativeDriver: true }),
      Animated.timing(scaleValue, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start();
  };

  return (
    <View style={[styles.container, { width: containerWidth }]}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back, {username || "Guest"}!</Text>
        <Image source={require("../assets/avatar.png")} style={styles.profileImage} />
      </View>

      {/* 2x2 Game Grid */}
      <View style={styles.grid}>
        <View style={styles.row}>
          <TouchableOpacity onPress={handlePress} style={styles.iconWrapper}>
            <Animated.Image source={require("../assets/numbers.png")} style={[styles.icon, { transform: [{ scale: scaleValue }] }]} />
            <Text style={styles.iconLabel}>Numbers</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handlePress} style={styles.iconWrapper}>
            <Animated.Image source={require("../assets/drawing.png")} style={[styles.icon, { transform: [{ scale: scaleValue }] }]} />
            <Text style={styles.iconLabel}>Drawing</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={handlePress} style={styles.iconWrapper}>
            <Animated.Image source={require("../assets/puzzles.png")} style={[styles.icon, { transform: [{ scale: scaleValue }] }]} />
            <Text style={styles.iconLabel}>Puzzles</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handlePress} style={styles.iconWrapper}>
            <Animated.Image source={require("../assets/reading.png")} style={[styles.icon, { transform: [{ scale: scaleValue }] }]} />
            <Text style={styles.iconLabel}>Reading</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Image source={require("../assets/settings.png")} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/home.png")} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/profile.png")} style={styles.footerIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styling for the Novice Dashboard
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD6E8",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 20,
    alignSelf: "center",
    borderRadius: 15, // Slightly rounded edges
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24, // Balanced size
    fontWeight: "bold",
    marginVertical: 5,
    color: "#333",
    textAlign: "center",
  },
  profileImage: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    marginVertical: 10,
  },
  grid: {
    width: "100%",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: 15,
  },
  iconWrapper: {
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 18,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    elevation: 5,
    width: "42%", // Makes sure they are spaced well
  },
  icon: {
    width: 85,
    height: 85,
  },
  iconLabel: {
    marginTop: 5,
    fontSize: 17,
    fontWeight: "bold",
    color: "#333",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: screenWidth * 0.6, // Slightly smaller footer width
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: -2 },
    elevation: 5,
  },
  footerIcon: {
    width: 42,
    height: 42,
  },
});
