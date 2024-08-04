import css from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <div className={css.contactContainer}>
      <p className={css.contactInformation}>🙍‍♂️ {name}</p>
      <p className={css.contactInformation}>📞 {number}</p>
      <button className={css.deleteBtn} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
