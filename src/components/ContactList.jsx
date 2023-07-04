import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts, deleteContact, changeStatus }) => {
  return (
    <div>
      {contacts.map((item) => (
        <ContactItem
          key={item.id}
          item={item}
          deleteContact={deleteContact}
          changeStatus={changeStatus}
        />
      ))}
    </div>
  );
};

export default ContactList;
