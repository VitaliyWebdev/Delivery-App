import { useContacts } from "@hooks/useContacts";
import { FlatList } from "react-native";
import ContactItem from "./ContactItem";
import HomeHeader from "./HomeHeader";

const Home = () => {
  const contacts = useContacts();
  return (
    <FlatList
      ListHeaderComponent={HomeHeader}
      data={contacts}
      renderItem={({ item, index }) => (
        <ContactItem contact={item} index={index} />
      )}
      keyExtractor={({ id }) => id.toString()}
    />
  );
};

export default Home;
