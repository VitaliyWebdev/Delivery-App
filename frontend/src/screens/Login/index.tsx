import { UserContext } from "@components/Organisms/UserProvider";
import WithCommonLayout from "@components/Organisms/WithCommonLayout";
import { SecureStorageKeys } from "@constants/enums";
import { StackNavigationProp } from "@react-navigation/stack";
import { publicRoutes } from "@src/constants/routes";
import { RootStackParams } from "@src/routes/beforeAuth/AuthStack";
import {
  storeUserSession
} from "@src/utils/encryptedStorage";
import { FC, useContext } from "react";

type TLogin = {
  navigation: StackNavigationProp<RootStackParams, publicRoutes.Login>;
};

const Login: FC<TLogin> = ({ navigation }) => {
  const { setUserToken } = useContext(UserContext);

  const onLogin = async (values) => {
   const  userSession = await storeUserSession(
      { token: "123_test_token" },
      SecureStorageKeys.USER_SESSION
    );
   
    if (userSession.token) {
      setUserToken("123_test_token");
    }
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
