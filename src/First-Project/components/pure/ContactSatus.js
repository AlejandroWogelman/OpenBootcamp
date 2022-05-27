import React, { useState } from "react";
import PropTypes from "prop-types";
import { ContactModel } from "../../models/card.class";

const ContactSatus = ({ contact }) => {
  const { online } = contact;
  const [status, setStatus] = useState(online);

  const changeState = () => {
    setStatus(!status);
    contact.change();
  };

  return (
    <>
      <p>Contacto: {status ? "En línea" : "No disponible"}</p>
      <button type="button" onClick={changeState}>
        Cambiar estado
      </button>
    </>
  );
};

ContactSatus.propTypes = {
  contact: PropTypes.instanceOf(ContactModel),
};

export default ContactSatus;
