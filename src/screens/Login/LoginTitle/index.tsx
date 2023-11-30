import { FC } from "react";
import { Text, View } from "react-native";
import s from "./styles";

const LoginTitle: FC = () => {
  return (
    <View style={s.titleWrapper}>
      <Text style={s.title}>Welcome to{"\n"}Converse CRM!</Text>
      <Text style={s.subtitle}>
        Enter your details to log in to your profile
      </Text>
    </View>
  );
};

export default LoginTitle;
