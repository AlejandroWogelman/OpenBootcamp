import React from "react";
import { ContactModel } from "../../models/card.class";
import ContactSatus from "../pure/ContactSatus";

const Contact = () => {
  const alejandro = new ContactModel("Ale", "Wogel", "algo@algo.com", false);
  const { name, surname, email } = alejandro;

  return (
    <ul>
      <li>
        <p>Nombre: {name}</p>
      </li>
      <li>
        <p>Apellido: {surname}</p>
      </li>
      <li>
        <p>Email: {email}</p>
      </li>
      <li>
        <ContactSatus contact={alejandro} />
      </li>
    </ul>
  );
};

export default Contact;
