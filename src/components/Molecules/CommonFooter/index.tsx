import Button from "@src/components/Atoms/Button";
import { publicRoutes } from "@src/constants/routes";
import { useAppNavigation } from "@src/hooks/useAppNavigation";
import { FC } from "react";
import s from "./styles";

const LoginFooter: FC = () => {
  const { navigate } = useAppNavigation();
  const onGoToSignUp = () => navigate(publicRoutes.SignUp);

  return (
    <Button
      label={"Forgot password?"}
      buttonProps={{ style: s.footer, onPress: onGoToSignUp }}
      textProps={{ style: s.footerLabel }}
    />
  );
};

export default LoginFooter;
