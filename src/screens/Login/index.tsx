import SafeViewWrapper from "@components/SafeViewWrapper";
import { FC } from "react";
import LoginHeader from "./LoginHeader";
import LoginTitle from "./LoginTitle";
import LoginForm from "./LoginForm";
import LoginFooter from "./LoginFooter";

const Login: FC = () => {
  const onLogin = (values) => {};
  return (
    <SafeViewWrapper>
      <LoginHeader />
      <LoginTitle />
      <LoginForm onSubmit={onLogin} />
      <LoginFooter />
    </SafeViewWrapper>
  );
};

export default Login;
