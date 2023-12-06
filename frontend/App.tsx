import { UserProvider } from "@components/Organisms/UserProvider";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "@routes/MainNavigation";
import "react-native-gesture-handler";



export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </UserProvider>
  );
}
