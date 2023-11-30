import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "@src/routes/beforeAuth/AuthStack";
import "react-native-gesture-handler";

const Stack = createStackNavigator();

export default function App() {
  const isSignedIn = false;

  return (
    <NavigationContainer>
      {/* @TODO: add after auth navigation */}
      {isSignedIn ? null : <AuthStack />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
