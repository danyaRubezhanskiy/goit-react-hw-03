import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";

function App() {
  const [information, setInformation] = useState(
    JSON.parse(localStorage.getItem("users")) || [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ]
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(information));
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <h1>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
}
export default App;
