import { Fragment, useState } from "react";

const Korak3 = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredNumberTouched, setEnteredNumberTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // === Derived States ===

  const enteredNameIsValid = enteredName !== "";
  const enteredNumberIsValid = enteredNumber !== "";
  const enteredEmailIsValid = enteredEmail !== "";

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const numberInputIsInvalid = !enteredNumberIsValid && enteredNumberTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  // === Event Handlers ===

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const enteredNumberHandler = (event) => {
    setEnteredNumber(event.target.value);
  };
  const enteredEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const nameBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };
  const numberBlurHandler = (event) => {
    setEnteredNumberTouched(true);
  };
  const emailBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // setEnteredNameTouched(true);
    // setEnteredNumberTouched(true);
    // setEnteredEmailTouched(true);
    if (enteredNameIsValid && enteredNumberIsValid && enteredEmailIsValid) {
      props.inputActive();
      console.log("korak 3 radi");
    }
    // setEnteredName("");
    // setEnteredNumber("");
    // setEnteredEmail("");

    // setEnteredNameTouched(false);
    // setEnteredNumberTouched(false);
    // setEnteredEmailTouched(false);
  };

  return (
    <Fragment>
      <form onSubmit={formSubmissionHandler}>
        <div>
          <div className="form-control">
            <input
              onBlur={nameBlurHandler}
              type="text"
              id="name"
              placeholder="Ime i prezime*"
              onChange={enteredNameHandler}
              value={enteredName}
            />
            {nameInputIsInvalid && (
              <p className="error-text">Ime i prezime su obavezni.</p>
            )}
          </div>
        </div>
        <div>
          <div className="form-control">
            <input
              onBlur={numberBlurHandler}
              type="number"
              id="name"
              placeholder="Broj mobitela*"
              onChange={enteredNumberHandler}
              value={enteredNumber}
            />
            {numberInputIsInvalid && (
              <p className="error-text">Broj mobitela je obavezan.</p>
            )}
          </div>
        </div>

        <div>
          <input
            onBlur={emailBlurHandler}
            type="email"
            id="name"
            placeholder="Email*"
            onChange={enteredEmailHandler}
            value={enteredEmail}
          />
          {emailInputIsInvalid && (
            <p className="error-text">E-mail je obavezan.</p>
          )}
        </div>
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

export default Korak3;
