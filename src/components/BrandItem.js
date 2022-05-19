import React, { useState } from "react";

const BrandItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  // === Event Handlers ===

  const radioHandler = (e) => {
    setIsChecked(e.target.checked);
    props.onRadio();
  };

  return (
    <li key={props.id} style={{ listStyleType: "none" }}>
      <input
        defaultChecked={isChecked}
        onChange={radioHandler}
        type="radio"
        id={props.id}
        name="cars"
        value={props.value}
      />
      <label htmlFor={props.name}>{props.name}</label>
    </li>
  );
};

export default BrandItem;
