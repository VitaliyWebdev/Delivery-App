import { FC, ReactNode } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import s from "./styles";

type TInput = {
  iconLeft?: ReactNode;
  inputProps?: TextInputProps;
  iconRight?: ReactNode;
  error?: string;
};
const Input: FC<TInput> = ({ inputProps, iconLeft, iconRight, error }) => {
  return (
    <View style={[s.inputWrapper, error && s.inputError]}>
      {iconLeft}
      <TextInput style={s.input} {...inputProps} />
      {iconRight}
      {error && <Text style={s.inputErrorLabel}>{error}</Text>}
    </View>
  );
};

export default Input;
