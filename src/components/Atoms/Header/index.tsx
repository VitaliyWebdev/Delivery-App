import { FC, ReactNode } from "react";
import { View, ViewStyle } from "react-native";
import s from "./styles";

type TChildren = {
  rightComponent: ReactNode;
  leftComponent: ReactNode;
  headerStyle?: ViewStyle;
};

const Header: FC<TChildren> = ({
  rightComponent,
  leftComponent,
  headerStyle,
}) => {
  return (
    <View style={{ ...s.header, ...headerStyle }}>
      <View>{leftComponent}</View>
      <View>{rightComponent}</View>
    </View>
  );
};

export default Header;
