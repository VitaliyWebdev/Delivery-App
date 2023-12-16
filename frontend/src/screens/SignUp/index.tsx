import { publicRoutes } from "@constants/routes";
import WithCommonLayout from "@components/Organisms/WithCommonLayout";
import { signUp } from "@src/network/lib/auth";
import { useUser } from "@hooks/useUser";
import { TUser } from "@src/types/user";

const SignUp = ({ navigation }) => {
  const { setUserToken } = useUser();

  const onNavigateToLogin = () => navigation.navigate(publicRoutes.Login);

  const onSubmit = async (userSignUpData: TUser) => {
    const signUpResponse = await signUp(userSignUpData);
    const token = signUpResponse?.token;
    if (token) {
      setUserToken(token);
    }
  };

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
      formProps={{ onSubmit, submitLabel: "Sign Up" }}
    />
  );
};

export default SignUp;
