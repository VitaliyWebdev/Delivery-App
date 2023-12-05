import WithCommonLayout from "@components/Organisms/WithCommonLayout";
import { StackNavigationProp } from "@react-navigation/stack";
import { publicRoutes } from "@src/constants/routes";
import { RootStackParams } from "@src/routes/beforeAuth/AuthStack";
import { FC } from "react";

type TLogin = {
  navigation: StackNavigationProp<RootStackParams, publicRoutes.Login>;
};

const Login: FC<TLogin> = ({ navigation }) => {
  const onLogin = (values) => {
    navigation.navigate("Home");
  };

  const onNavigateToSignUp = () => navigation.navigate(publicRoutes.SignUp);
  return (
    <WithCommonLayout
      onFormSubmit={() => {
        console.log(23);
      }}
      headerProps={{
        onPress: onNavigateToSignUp,
        label: "Sign Up",
      }}
      titleProps={{
        title: `Welcome to \nConverse CRM!`,
        subtitle: "",
      }}
      formProps={{ onSubmit: onLogin, submitLabel: "Sign In" }}
    />
  );
};

export default Login;
