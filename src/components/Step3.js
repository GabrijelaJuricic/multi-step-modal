import { Fragment, useRef, useState } from "react";

const Step3 = (props) => {
  const [nameError, setNameError] = useState();
  const [numberError, setNumberError] = useState();
  const [emailError, setEmailError] = useState();

  // === Refs ===

  const inputNameRef = useRef();
  const inputNumberRef = useRef();
  const inputEmailRef = useRef();

  // === Event Handlers ===

  const formSubmissionHandler = () => {
    const enteredName = inputNameRef.current.value;
    const enteredNumber = inputNumberRef.current.value;
    const enteredEmail = inputEmailRef.current.value;

    if (
      enteredName.trim().length === 0 &&
      enteredNumber.trim().length === 0 &&
      enteredEmail.trim().length === 0
    ) {
      setNameError() || setEmailError() || setNumberError();
    }
    props.inputActive(enteredName && enteredNumber && enteredEmail);
  };

  const nameBlurHandler = () => {
    setNameError("Ime i prezime su obavezni.");
  };
  const numberBlurHandler = () => {
    setNumberError("Broj je obavezan.");
  };
  const emailBlurHandler = () => {
    setEmailError("E-mail je obavezan.");
  };

  return (
    <Fragment>
      <form onChange={formSubmissionHandler}>
        <div>
          <div className="form-control">
            <input
              ref={inputNameRef}
              onBlur={nameBlurHandler}
              type="text"
              id="name"
              placeholder="Ime i prezime*"
            />
          </div>
          {nameError}
        </div>
        <div>
          <div className="form-control">
            <input
              ref={inputNumberRef}
              onBlur={numberBlurHandler}
              type="number"
              id="name"
              placeholder="Broj mobitela*"
            />
          </div>
          {numberError}
        </div>

        <div>
          <input
            ref={inputEmailRef}
            onBlur={emailBlurHandler}
            type="email"
            id="name"
            placeholder="Email*"
          />
        </div>
        {emailError}
        <div>
          <div className="form-control">
            <textarea
              type="text"
              id="name"
              placeholder="Napomena (opcionalno)"
            ></textarea>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Step3;