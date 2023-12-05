import { Image, Text, TouchableOpacity, View } from "react-native";
import s from "./styles";
import { Contact } from "expo-contacts";
import { FC } from "react";
import Phone from "@src/assets/icons/Phone";

type TContactItem = {
  contact: Contact;
  index: number;
};
const ContactItem: FC<TContactItem> = ({ contact, index }) => {
  const { firstName = "", lastName = "", image } = contact;
  if (firstName === "Алік") {
    console.log(contact);
  }
  return (
    <TouchableOpacity style={s.contactWrapper}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={s.contactIcon}>
          <Text style={s.contactIconLabel}>
            {firstName[0]}
            {lastName[0]}
          </Text>
          {image && (
            <Image
              source={{ uri: image.uri }}
              style={{ ...s.contactIcon, position: "absolute" }}
            />
          )}
        </View>
        <View>
          <Text>
            {index + 1}. {firstName} {lastName}
          </Text>
        </View>
      </View>

      <View style={{ alignSelf: "flex-end" }}>
        <Phone />
      </View>
    </TouchableOpacity>
  );
};

export default ContactItem;
