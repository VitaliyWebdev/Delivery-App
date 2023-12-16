import { FC } from "react";
import { Text, View } from "react-native";
import s from "./styles";
import { TCommonTitle } from "@src/types/commonTitle";

const CommonTitle: FC<TCommonTitle> = ({ title, subtitle }) => {
  return (
    <View style={s.titleWrapper}>
      <Text style={s.title}>{title}</Text>
      <Text style={s.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default CommonTitle;
