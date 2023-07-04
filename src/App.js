import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

function App() {
  const [contacts, setContact] = useState([]);
  function addContact(contact) {
    setContact([...contacts, contact]);
  }

  function deleteContact(id) {
    const newArr = contacts.filter((item) => item.id !== id);
    setContact(newArr);
  }

  function changeStatus(id) {
    const newArr = contacts.map((item) => {
      if (item.id === id) {
        item.premium = !item.premium;
      }
      return item;
    });
    setContact(newArr);
  }

  return (
    <div className="App" style={{ marginTop: "20px" }}>
      <h1 style={{ color: "white" }}>Contact-Book</h1>
      <ContactForm addContact={addContact} />
      <ContactList
        deleteContact={deleteContact}
        contacts={contacts}
        changeStatus={changeStatus}
      />
    </div>
  );
}

export default App;
