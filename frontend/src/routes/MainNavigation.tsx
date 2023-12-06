import { useUser } from "@hooks/useUser";
import MainTabs from "./afterAuth/AfterAuthStack";
import AuthStack from "./beforeAuth/AuthStack";

const MainNavigation = () => {
  const { userToken } = useUser();

  if (userToken) return <MainTabs />;
  return <AuthStack />;
};

export default MainNavigation;
