import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from "nanoid";

function App() {
  const [information, setInformation] = useState(
    JSON.parse(localStorage.getItem("users")) || [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ]
  );

  const [filterValue, setFilterValue] = useState("");

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilterValue(value);
  };

  const filteredList = information.filter((profile) =>
    profile.name.toLowerCase().includes(filterValue)
  );

  const addContact = (values, actions) => {
    const finalContact = {
      ...values,
      id: nanoid(),
    };
    actions.resetForm();
    setInformation([...filteredList, finalContact]);
  };

  const deleteProfile = (profileId) => {
    setInformation(information.filter((item) => item.id !== profileId));
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(information));
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact}></ContactForm>
      <SearchBox filter={filterValue} handleValue={handleFilter}></SearchBox>
      <ContactList
        deleteProfile={deleteProfile}
        filteredList={filteredList}
      ></ContactList>
    </div>
  );
}

export default App;
