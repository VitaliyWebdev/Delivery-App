import { FC, ReactNode } from "react";
import { SafeAreaView } from "react-native";
import s from "./styles";

type TChildren = {
  children: ReactNode;
};

const SafeViewWrapper: FC<TChildren> = ({ children }) => {
  return <SafeAreaView style={s.wrapper}>{children}</SafeAreaView>;
};

export default SafeViewWrapper;
