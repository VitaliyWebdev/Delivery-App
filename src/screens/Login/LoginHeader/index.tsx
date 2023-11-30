import Header from "@components/Header";
import { publicRoutes } from "@constants/routes";
import ContactIcon from "@src/assets/icons/ContactIcon";
import Button from "@src/components/Button";
import { useAppNavigation } from "@src/hooks/useAppNavigation";
import { TouchableOpacity } from "react-native";
import s from "./styles";

const LoginHeader = () => {
  const { navigate } = useAppNavigation();

  const onNavigateToSignUp = () => navigate(publicRoutes.SignUp);

  return (
    <Header
      rightComponent={
        <Button
          label="Sign Up"
          textProps={{ style: s.btnText }}
          buttonProps={{
            onPress: onNavigateToSignUp,
          }}
        />
      }
      leftComponent={
        <TouchableOpacity>
          <ContactIcon width={34} height={34} />
        </TouchableOpacity>
      }
    />
  );
};

export default LoginHeader;
