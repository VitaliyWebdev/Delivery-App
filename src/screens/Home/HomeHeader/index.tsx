import Header from "@components/Atoms/Header";
import ExpandableInput from "@components/Molecules/ExpandableInput";
import { Dispatch, FC, SetStateAction } from "react";
import { Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import s from "./styles";

const PADDING_FROM_SAFE_AREA = 12;

type THomeHeader = {
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

const HomeHeader: FC<THomeHeader> = ({ setSearchTerm }) => {
  const insets = useSafeAreaInsets();
  return (
    <Header
      headerStyle={{
        ...s.header,
        paddingTop: insets.top + PADDING_FROM_SAFE_AREA,
      }}
      leftComponent={
        <Text
          style={
            s.headerText,
          }
        >
          Calls
        </Text>
      }
      rightComponent={
        <ExpandableInput textInputProps={{ onChangeText: setSearchTerm }} />
      }
    />
  );
};

export default HomeHeader;
