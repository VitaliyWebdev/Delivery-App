import ContactIcon from "@src/assets/icons/ContactIcon";
import Button from "@src/components/Atoms/Button";
import Header from "@src/components/Atoms/Header";
import { TCommonHeader } from "@src/types/commonHeader";
import { FC } from "react";
import { TouchableOpacity } from "react-native";
import s from "./styles";

const CommonHeader: FC<TCommonHeader> = ({ onPress, label }) => {
  return (
    <Header
      headerStyle={s.header}
      rightComponent={
        <Button
          label={label}
          textProps={{ style: s.btnText }}
          buttonProps={{
            onPress,
          }}
        />
      }
      leftComponent={
        <TouchableOpacity>
          <ContactIcon width={34} height={34} />
        </TouchableOpacity>
      }
    />
  );
};

export default CommonHeader;
