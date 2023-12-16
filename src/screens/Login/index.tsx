import WithCommonLayout from "@components/Organisms/WithCommonLayout";
import { publicRoutes } from "@src/constants/routes";
import { useAppNavigation } from "@src/hooks/useAppNavigation";
import { FC } from "react";

const Login: FC = () => {
  const onLogin = (values) => {};

  const { navigate } = useAppNavigation();
  const onNavigateToSignUp = () => navigate(publicRoutes.SignUp);
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
