import { publicRoutes } from "@src/constants/routes";

// this type create to fix issue https://stackoverflow.com/questions/44701245/hide-header-in-stack-navigator-react-navigation
export type RootStackParamList = {
  [publicRoutes.Login]: { id: number } | undefined;
  [publicRoutes.SignUp]: { id: number } | undefined;
};
