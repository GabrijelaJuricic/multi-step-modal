import { Fragment, useRef, useState } from "react";
import "./Step3.css";

const Step3 = (props) => {
  const [nameError, setNameError] = useState();
  const [numberError, setNumberError] = useState();
  const [emailError, setEmailError] = useState();

  // === Refs ===
  const inputNameRef = useRef();
  const inputNumberRef = useRef();
  const inputEmailRef = useRef();
  const inputTextRef = useRef();

  // === Event Handlers ===
  const nameBlurHandler = () => {
    const nameValue = inputNameRef.current.value.trim();
    if (nameValue === "") {
      setNameError("Ime i prezime su obavezni.");
    } else {
      setNameError("");
    }
  };
  const numberBlurHandler = () => {
    const numberValue = inputNumberRef.current.value.trim();
    if (numberValue === "") {
      setNumberError("Broj je obavezan.");
    } else {
      setNumberError("");
    }
  };
  const emailBlurHandler = () => {
    const emailValue = inputEmailRef.current.value.trim();
    if (emailValue === "") {
      setEmailError("E-mail je obavezan.");
    } else {
      setEmailError("");
    }
  };

  const formSubmissionHandler = () => {
    if (
      inputNameRef.current.value &&
      inputNumberRef.current.value &&
      inputEmailRef.current.value
    ) {
      props.inputActive(true);
      props.returnSelected({
        name: inputNameRef.current.value,
        number: inputNumberRef.current.value,
        email: inputEmailRef.current.value,
        text: inputTextRef.current.value,
      });
    }
  };

  return (
    <Fragment>
      <form onChange={formSubmissionHandler}>
        <div className="form">
          <input
            ref={inputNameRef}
            onBlur={nameBlurHandler}
            type="text"
            id="formName"
            placeholder="Ime i prezime*"
          />
          {nameError && <p className="error_message">{nameError}</p>}
          <input
            ref={inputNumberRef}
            onBlur={numberBlurHandler}
            type="number"
            id="formNumber"
            placeholder="Broj mobitela*"
          />
          {numberError && <p className="error_message">{numberError}</p>}
          <input
            ref={inputEmailRef}
            onBlur={emailBlurHandler}
            type="email"
            id="formEmail"
            placeholder="Email*"
          />
          {emailError && <p className="error_message">{emailError}</p>}
          <textarea
            ref={inputTextRef}
            type="text"
            id="formText"
            placeholder="Napomena (opcionalno)"
          ></textarea>
        </div>
      </form>
    </Fragment>
  );
};

export default Step3;
