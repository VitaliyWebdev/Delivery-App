import { useContacts } from "@hooks/useContacts";
import { FlatList } from "react-native";
import ContactItem from "./ContactItem";
import HomeHeader from "./HomeHeader";
import Button from "@components/Atoms/Button";
import { clearUserSession } from "@src/utils/encryptedStorage";
import { SecureStorageKeys } from "@constants/enums";

const Home = () => {
  const { contacts, setSearchTerm } = useContacts();
  return (
    <>
      <FlatList
        ListHeaderComponent={<HomeHeader setSearchTerm={setSearchTerm} />}
        data={contacts}
        renderItem={({ item, index }) => (
          <ContactItem contact={item} index={index} />
        )}
        keyExtractor={({ id }) => id.toString()}
        stickyHeaderIndices={[0]}
      />
      <Button
        label="On clear"
        buttonProps={{
          onPress: () => {
            clearUserSession(SecureStorageKeys.USER_SESSION);
          },
        }}
      />
    </>
  );
};

export default Home;
