import { FC } from "react";
import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type TButton = {
  label: string;
  buttonProps?: TouchableOpacityProps;
  textProps?: TextProps;
};

const Button: FC<TButton> = ({ label, buttonProps, textProps }) => {
  return (
    <TouchableOpacity {...buttonProps}>
      <Text {...textProps}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
