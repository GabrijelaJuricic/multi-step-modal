import { useState } from "react";

const ContactData = (props) => {
  return (
    <div>
      <li key={props.id}>
        <input
          value={props.value}
          type={props.type}
          name={props.name}
          cellPhone={props.number}
          email={props.email}
          optionalText={props.text}
          placeholder={props.placeholder}
        />
        <textarea type={props.type}>

        </textarea>
      </li>
    </div>
  );
};

export default ContactData;
