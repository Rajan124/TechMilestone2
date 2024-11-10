import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddPatientInfo from "../components/Screens/AddPatientInfo";
import { View, Text } from "react-native";
import ViewPatientInfo from "../components/Screens/ViewPatientInfo";
import HomeScreen from "../components/Screens/HomeScreen";
import AddPatientTest from "../components/Screens/AddPatientTest";
import ViewPatientTest from "../components/Screens/ViewPatientTest";
import Login from "../components/Authentication/Login";
import WelcomeScreen from "../components/WelcomeScreen";
import SignUp from "../components/Authentication/SignUp";
import ListAllPatients from "../components/Screens/ListAllPatients";
import UpdatePatientInfo from "../components/Screens/UpdatePatientInfo";

function AppNavigator() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen name="AddPatientInfo" component={AddPatientInfo} />
        <Stack.Screen name="ListAllPatients" component={ListAllPatients} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="ViewPatientInfo" component={ViewPatientInfo} />
        <Stack.Screen name="AddPatientTest" component={AddPatientTest} />
        <Stack.Screen name="ViewPatientTest" component={ViewPatientTest} />
        <Stack.Screen name="UpdatePatientInfo" component={UpdatePatientInfo} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
