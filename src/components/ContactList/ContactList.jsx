import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

export default function ContactList() {
  // const contactList = useSelector((state) => state.tasks.items);
  // console.log(contactList);

  const selectContacts = useSelector((state) => state.contacts.items);

  return (
    <ul className={s.contactListUl}>
      {selectContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.contactListLi}>
            <Contact id={id} name={name} number={number} />
          </li>
        );
      })}
    </ul>
  );
}
