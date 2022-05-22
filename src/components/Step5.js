import { Fragment } from "react";
import "./Step5.css";

const Step5 = (props) => {
  const closeHandler = () => {
    props.onClose();
  };

  return (
    <Fragment>
      <div className="finish">
        <h3>Vaša prijava je uspješno poslana</h3>
        <p>
          Vaša prijava je uspješno poslana i zaprimljena. Kontaktirat ćemo vas u
          najkraćem mogućem roku. Hvala Vam!
        </p>
        <button onClick={closeHandler}>Završi</button>
      </div>
    </Fragment>
  );
};

export default Step5;
