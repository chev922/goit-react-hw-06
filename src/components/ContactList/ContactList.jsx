import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
/* import Contact from "../Contact/Contact"; */

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const filteredContacts =
    contacts?.filter(
      (contact) =>
        contact.name &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    ) || [];

  return (
    <>
      {filteredContacts.length > 0 && (
        <ul className={css.list}>
          {filteredContacts.map((contact) => (
            <Contact key={contact.id} item={contact} />
          ))}
        </ul>
      )}
    </>
  );
}
