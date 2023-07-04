import React, { useState } from "react";

const ContactForm = ({ addContact }) => {
  const [nameInputVal, setNameInputVal] = useState("");
  const [surnameInputVal, setSurnameInputVal] = useState("");
  const [numberInputVal, setNumberInputVal] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (
          !nameInputVal.trim() ||
          !surnameInputVal.trim() ||
          !numberInputVal.trim()
        ) {
          return;
        }
        const newContact = {
          id: Date.now(),
          name: nameInputVal,
          surname: surnameInputVal,
          number: numberInputVal,
          premium: false,
        };
        addContact(newContact);

        setNameInputVal("");
        setSurnameInputVal("");
        setNumberInputVal("");
      }}
    >
      <input
        value={nameInputVal}
        onChange={(e) => {
          setNameInputVal(e.target.value);
        }}
        type="text"
      />
      <input
        value={surnameInputVal}
        onChange={(e) => {
          setSurnameInputVal(e.target.value);
        }}
        type="text"
      />
      <input
        value={numberInputVal}
        onChange={(e) => {
          setNumberInputVal(e.target.value);
        }}
        type="text"
      />
      <button>Add contact</button>
    </form>
  );
};

export default ContactForm;
