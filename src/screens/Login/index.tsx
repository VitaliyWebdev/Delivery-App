import SafeViewWrapper from "@src/components/SafeViewWrapper";
import { FC } from "react";
import LoginHeader from "./LoginHeader";
import LoginTitle from "./LoginTitle";

const Login: FC = () => {
  return (
    <SafeViewWrapper>
      <LoginHeader />
      <LoginTitle />
    </SafeViewWrapper>
  );
};

export default Login;
