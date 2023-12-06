import Phone from "@src/assets/icons/Phone";
import { Contact } from "expo-contacts";
import { FC, memo } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import s from "./styles";

type TContactItem = {
  contact: Contact;
  index: number;
};
const ContactItem: FC<TContactItem> = ({ contact, index }) => {
  const { firstName = "", lastName = "", image } = contact;

  return (
    <TouchableOpacity style={s.contactWrapper}>
      <View style={s.contactIconWithLabelWrapper}>
        <View style={s.contactIcon}>
          <Text style={s.contactIconLabel}>
            {firstName[0]}
            {lastName[0]}
          </Text>
          {image && (
            <Image source={{ uri: image.uri }} style={[s.contactIcon, s.img]} />
          )}
        </View>
        <View>
          <Text>
            {index + 1}. {firstName} {lastName}
          </Text>
        </View>
      </View>

      <View style={s.phoneWrapper}>
        <Phone />
      </View>
    </TouchableOpacity>
  );
};

export default memo(ContactItem);
