import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

export default function ContactList() {
  const selectNameFilter = useSelector((state) => state.filters.name);
  const selectContacts = useSelector((state) => state.contacts.items);

  const сontacts = selectContacts.filter((contact) =>
    contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );

  return (
    <ul className={s.contactListUl}>
      {сontacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.contactListLi}>
            <Contact id={id} name={name} number={number} />
          </li>
        );
      })}
    </ul>
  );
}
