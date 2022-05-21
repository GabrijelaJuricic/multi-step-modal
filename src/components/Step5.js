import { Fragment } from "react";

const Step5 = (props) => {
  const closeHandler = () => {
    props.onClose();
  };

  return (
    <Fragment>
      <p>
        Vaša prijava je uspješno poslana i zaprimljena. Kontaktirat ćemo vas u
        najkraćem mogućem roku. Hvala Vam!
      </p>
      <button onClick={closeHandler}>Završi</button>
    </Fragment>
  );
};

export default Step5;
