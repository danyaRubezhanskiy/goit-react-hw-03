import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ filteredList, deleteProfile }) => {
  return (
    <ul className={css.contactsList}>
      {filteredList.map(({ id, name, number }) => (
        <li key={id}>
          <Contact
            id={id}
            deleteProfile={deleteProfile}
            name={name}
            number={number}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
