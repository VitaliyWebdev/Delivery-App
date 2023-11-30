import { FC, ReactNode } from "react";
import { SafeAreaView, View } from "react-native";
import s from "./styles";

type TChildren = {
  children: ReactNode;
};

const SafeViewWrapper: FC<TChildren> = ({ children }) => {
  return (
    <View style={s.mainWrapper}>
      <SafeAreaView style={s.wrapper}>{children}</SafeAreaView>
    </View>
  );
};

export default SafeViewWrapper;
