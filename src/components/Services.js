import React, { useState } from "react";

const Services = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  // === Event Handlers ===
  const checkboxHandler = () => {
    props.onServiceChange(props.service, props.price, isChecked);
    isChecked ? props.onValue(props.price * -1.0) : props.onValue(props.price);
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <li key={props.id} style={{ listStyleType: "none" }}>
        <label htmlFor={props.key}>
          <input
            defaultChecked={isChecked}
            onChange={() => checkboxHandler()}
            type="checkbox"
            service={props.service}
            price={props.price}
            id={props.key}
          />
          {props.service} {`(${props.price.toFixed(2)} kn)`}
        </label>
      </li>
    </div>
  );
};

export default Services;
