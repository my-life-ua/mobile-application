import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* 
Steps:
 * Criar Screens como Funcs
 * Criar Stack e incluir la esses screens
 * Incluir Stack na botomTabStack
*/

function HomeScreen() {
  return (
    <Profile></Profile>
  );
}

function ProfileScreen() {
  return (
    <Profile></Profile>
  );
}

function LoginScreen({ navigation }) {
  return (
    <Login navigation={navigation}></Login>
  );
}

function RegisterScreen({ navigation }) {
  return (
    <Register navigation={navigation}></Register>
  );
}

const LoginStack = createStackNavigator();
function LoginStackScreen() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
      <LoginStack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
    </LoginStack.Navigator>
  );
}

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Home" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}

const StatisticsStack = createStackNavigator();
const MealsStack = createStackNavigator();
const ExerciseStack = createStackNavigator();

const Tab = createBottomTabNavigator();
function BottomTab() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
  );
}

const AppStackNavigator = createStackNavigator();
function App() {
  return (
    /* Tab bottom */
    <NavigationContainer>
      <AppStackNavigator.Navigator>
        <AppStackNavigator.Screen name="OAuth" component={LoginStackScreen} options={{headerShown:false}} />
        <AppStackNavigator.Screen name="App" component={BottomTab} options={{headerShown:false}} />
      </AppStackNavigator.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;