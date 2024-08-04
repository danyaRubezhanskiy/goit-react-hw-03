import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ filteredList }) => {
  return (
    <ul className={css.contactsList}>
      {filteredList.map(({ id, name, number }) => (
        <li key={id}>
          <Contact name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
