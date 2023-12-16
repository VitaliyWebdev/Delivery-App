import { createStackNavigator } from "@react-navigation/stack";
import Login from "@screens/Login";
import SignUp from "@screens/SignUp";
import { publicRoutes } from "@src/constants/routes";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={publicRoutes.Login}
      screenOptions={screenOptions}
    >
      <Stack.Screen name={publicRoutes.Login} component={Login} />
      <Stack.Screen name={publicRoutes.SignUp} component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
