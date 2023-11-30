import { Text, View, TouchableOpacity } from "react-native";

const Login = ({ navigation }) => {
  
  const onNavigateToSignUp = () => navigation.navigate("SignUp");

  return (
    <View>
      <TouchableOpacity onPress={onNavigateToSignUp}>
        <Text>Navigate to Sign Up screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
