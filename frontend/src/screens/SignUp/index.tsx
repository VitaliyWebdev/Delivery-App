import { publicRoutes } from "@constants/routes";
import WithCommonLayout from "@src/components/Organisms/WithCommonLayout";

const SignUp = ({ navigation }) => {
  const onNavigateToLogin = () => navigation.navigate(publicRoutes.Login);
  return (
    <WithCommonLayout
      onFormSubmit={() => {
        console.log(23);
      }}
      headerProps={{
        onPress: onNavigateToLogin,
        label: "Sign In",
      }}
      titleProps={{
        title: `Register to \nConverse CRM!`,
        subtitle: "",
      }}
      formProps={{ onSubmit: () => {}, submitLabel: "Sign Up" }}
    />
  );
};

export default SignUp;
