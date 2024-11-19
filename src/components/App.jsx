import { useState, useEffect } from "react";

// import { useId } from 'react';
import ContactForm from "./ContactForm/ContactForm";
import Title from "./Title/Title";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import contactLists from "./ContactList/contactLists.json";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  // const [contacts, setContact] = useState(() => {
  //   const savedContacts = window.localStorage.getItem("contacts");
  //   if (savedContacts !== null) {
  //     const contactList = JSON.parse(savedContacts);
  //     // const leng = contactList.contacts.length;
  //     return contactList.contacts;
  //   }

  //   return contactLists;
  // });

  // const hendleDelete = (id) => {
  //   console.log(id);
  //   setContact((prev) => prev.filter((contact) => contact.id !== id));
  // };

  // const handleSubmit = (values, actions) => {
  //   const newContact = { ...values, id: nanoid(4) };
  //   setContact((prev) => [...prev, newContact]);
  //   actions.resetForm();
  // };

  // const searchEngine = contacts.filter((contact) => {
  //   return contact.name.toLowerCase().includes(search.toLowerCase());
  // });

  // ////////////////
  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}
