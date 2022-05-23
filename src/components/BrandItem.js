import React, { useState } from "react";

const BrandItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  // === Event Handlers ===
  const radioHandler = (e) => {
    props.updateSelectedValue(props.name);
    setIsChecked(e.target.checked);
    props.onRadio();
  };

  return (
    <li key={props.id} style={{ listStyleType: "none" }}>
      <label htmlFor={props.key}>
        <input
          defaultChecked={isChecked}
          onChange={radioHandler}
          type="radio"
          id={props.key}
          name="cars"
          value={props.value}
        />
        {props.name}
      </label>
    </li>
  );
};

export default BrandItem;
