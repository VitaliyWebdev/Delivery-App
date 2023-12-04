import { FC } from "react";
import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type TButtonProps = TouchableOpacityProps & {
  onPress: (e: React.FormEvent<HTMLFormElement>) => void;
};

type TButton = {
  label: string;
  buttonProps?: TButtonProps;
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
