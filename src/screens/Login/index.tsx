import SafeViewWrapper from "@src/components/SafeViewWrapper";
import { FC } from "react";
import LoginHeader from "./LoginHeader";

const Login: FC = () => {
  return (
    <SafeViewWrapper>
      <LoginHeader />
    </SafeViewWrapper>
  );
};

export default Login;
