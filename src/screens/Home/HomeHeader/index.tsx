import Header from "@components/Atoms/Header";
import SearchLoop from "@src/assets/icons/SearchLoop";
import { Text, TouchableOpacity } from "react-native";
import s from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ExpandableInput from "@components/Molecules/ExpandableInput";

const PADDING_FROM_SAFE_AREA = 12;
const HomeHeader = () => {
  const insets = useSafeAreaInsets();
  return (
    <Header
      headerStyle={{
        ...s.header,
        paddingTop: insets.top + PADDING_FROM_SAFE_AREA,
      }}
      leftComponent={
        <Text
          style={{
            ...s.headerText,
          }}
        >
          Calls
        </Text>
      }
      rightComponent={<ExpandableInput />}
    />
  );
};

export default HomeHeader;
