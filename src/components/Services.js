import React, { useState } from "react";

const Services = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  // === Event Handlers ===

  const checkboxHandler = () => {
    props.onServiceChange(props.service, props.price, isChecked);
    isChecked ? props.onValue(props.price * -1.0) : props.onValue(props.price);
    setIsChecked(!isChecked);

    props.onCheckbox();
  };

  return (
    <div>
      <li key={props.id} style={{ listStyleType: "none" }}>
        <input
          defaultChecked={isChecked}
          onChange={() => checkboxHandler()}
          type="checkbox"
          service={props.service}
          price={props.price}
        />
        <label htmlFor={props.service}>
          {props.service} {`(${props.price} kn)`}
        </label>
      </li>
    </div>
  );
};

export default Services;
