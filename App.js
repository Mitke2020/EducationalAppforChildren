import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

// Home Screen
const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Educational App for Children</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
      <Text style={styles.buttonText}>Sign Up</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
      <Text style={styles.buttonText}>Log In</Text>
    </TouchableOpacity>
  </View>
);

// Sign Up Screen
const SignUpScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Sign Up</Text>
    <TextInput placeholder="Username" style={styles.input} />
    <TextInput placeholder="Password" secureTextEntry style={styles.input} />
    <TextInput placeholder="Age" keyboardType="numeric" style={styles.input} />
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
      <Text style={styles.buttonText}>Sign Up</Text>
    </TouchableOpacity>
  </View>
);

// Login Screen
const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Log In</Text>
    <TextInput placeholder="Username" style={styles.input} />
    <TextInput placeholder="Password" secureTextEntry style={styles.input} />
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
      <Text style={styles.buttonText}>Log In</Text>
    </TouchableOpacity>
  </View>
);

// Dashboards based on age group
const NoviceDashboard = () => (
  <View style={[styles.container, { backgroundColor: '#FFDAB9' }]}> 
    <Text>Welcome, Novice User!</Text>
  </View>
);

const IntermittentDashboard = () => (
  <View style={[styles.container, { backgroundColor: '#B3E5FC' }]}> 
    <Text>Welcome, Intermittent User!</Text>
  </View>
);

const ExpertDashboard = () => (
  <View style={[styles.container, { backgroundColor: '#E6E6FA' }]}> 
    <Text>Welcome, Expert User!</Text>
  </View>
);

// Tab Navigator for different age groups
const Tab = createBottomTabNavigator();
const DashboardTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Novice" component={NoviceDashboard} />
    <Tab.Screen name="Intermittent" component={IntermittentDashboard} />
    <Tab.Screen name="Expert" component={ExpertDashboard} />
  </Tab.Navigator>
);

// Stack Navigator
const Stack = createStackNavigator();
const linking = {
  prefixes: ['http://localhost:19006'],
  config: {
    screens: {
      Home: '',
      SignUp: 'signup',
      Login: 'login',
      Dashboard: 'dashboard',
    },
  },
};

const App = () => (
  <NavigationContainer linking={linking}>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Dashboard" component={DashboardTabs} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
