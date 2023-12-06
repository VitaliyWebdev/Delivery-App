import { useEffect, useState } from "react";
import * as Contacts from "expo-contacts";

export const useContacts = () => {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const { status } = await Contacts.requestPermissionsAsync();

        if (status === "granted") {
          const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.Emails, Contacts.Fields.Image],
          });

          if (data.length > 0) {
            setContacts(data);
          }
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  const filterContacts = (term: string) => {
    if (!term) {
      // If the term is empty, return the original array
      return contacts;
    }

    // Filter contacts based on the search term
    const filteredContacts = contacts.filter((contact) => {
      const fullName = `${contact.firstName || ""} ${contact.lastName || ""}`;
      return fullName.toLowerCase().includes(term.toLowerCase());
    });

    return filteredContacts;
  };

  const getFilteredContacts = () => filterContacts(searchTerm);

  return { contacts: getFilteredContacts(), setSearchTerm };
};
