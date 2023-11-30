import { publicRoutes } from "@constants/routes";
import { Text, View, TouchableOpacity } from "react-native";

const SignUp = ({ navigation }) => {
  const onNavigateToLogin = () => navigation.navigate(publicRoutes.Login);
  return (
    <View>
      <TouchableOpacity onPress={onNavigateToLogin}>
        <Text>Navigate to Sign Up screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
