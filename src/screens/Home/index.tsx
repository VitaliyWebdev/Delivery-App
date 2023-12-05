import { useContacts } from "@hooks/useContacts";
import { FlatList } from "react-native";
import ContactItem from "./ContactItem";
import HomeHeader from "./HomeHeader";

const Home = () => {
  const { contacts, setSearchTerm } = useContacts();
  return (
    <FlatList
      ListHeaderComponent={<HomeHeader setSearchTerm={setSearchTerm} />}
      data={contacts}
      renderItem={({ item, index }) => (
        <ContactItem contact={item} index={index} />
      )}
      keyExtractor={({ id }) => id.toString()}
      stickyHeaderIndices={[0]}
    />
  );
};

export default Home;
