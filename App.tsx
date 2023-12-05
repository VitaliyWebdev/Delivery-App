import { NavigationContainer } from "@react-navigation/native";
import MainTabs from "@src/routes/afterAuth/AfterAuthStack";
import AuthStack from "@src/routes/beforeAuth/AuthStack";
import "react-native-gesture-handler";

export default function App() {
  const isSignedIn = true;

  return (
    <NavigationContainer>
      {isSignedIn ? <MainTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}
