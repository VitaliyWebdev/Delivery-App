import { publicRoutes } from "@src/constants/routes";
import { useAppNavigation } from "@src/hooks/useAppNavigation";
import { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import s from "./styles";
import Button from "@components/Button";

const LoginFooter: FC = () => {
  const { navigate } = useAppNavigation();
  const onGoToSignUp = () => navigate(publicRoutes.SignUp);

  return (
    // <TouchableOpacity onPress={onGoToSignUp} style={s.footer}>
    <Button
      label={"Forgot password?"}
      buttonProps={{ style: s.footer, onPress: onGoToSignUp }}
      textProps={{ style: s.footerLabel }}
    />
  );
};

export default LoginFooter;
//   <Text style={s.footerLabel}>Forgot password?</Text>
{
  /* </TouchableOpacity> */
}
