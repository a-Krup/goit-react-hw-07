import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import {
  addContact,
  deleteContact,
  selectContacts,
} from "./redux/contactsSlice";
import { selectNameFilter, changeFilter } from "./redux/filtersSlice";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddContact = (name, number) => {
    dispatch(addContact({ name, number }));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleChangeFilter = (filter) => {
    dispatch(changeFilter(filter));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox searchTerm={filter} setSearchTerm={handleChangeFilter} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
};

export default App;
