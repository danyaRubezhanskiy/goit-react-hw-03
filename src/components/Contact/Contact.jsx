import css from "./Contact.module.css";

const Contact = ({ name, number, deleteProfile, id }) => {
  return (
    <div className={css.contactContainer}>
      <p className={css.contactInformation}>🙍‍♂️ {name}</p>
      <p className={css.contactInformation}>📞 {number}</p>
      <button
        onClick={() => deleteProfile(id)}
        className={css.deleteBtn}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
