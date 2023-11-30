import { createStackNavigator } from "@react-navigation/stack";
import Login from "@screens/Login";
import SignUp from "@screens/SignUp";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
