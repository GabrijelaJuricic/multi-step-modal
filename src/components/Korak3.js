import Modal from "./Modal";

import { useState } from "react";
import Korak2 from "./Korak2";
import Korak4 from "./Korak4";

const Korak3 = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredNumberTouched, setEnteredNumberTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [prevStep, setPrevStep] = useState(false);
  const [nextStep, setNextStep] = useState(false);

  const previousStepHandler = (event) => {
    setPrevStep(true);
  };

const nextStepHandler = (event) => {
setNextStep(true);
};

  const enteredNameIsValid = enteredName !== "";
  const enteredNumberIsValid = enteredNumber !== "";
  const enteredEmailIsValid = enteredEmail !== "" && enteredEmail.includes("@");

  const nameInputIsInvalid =
    !enteredNameIsValid && enteredNameTouched;

  const numberInputIsInvalid = !enteredNumberIsValid && enteredNumberTouched;

  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredNumberIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

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

    setEnteredNameTouched(true);
    setEnteredNumberTouched(true);
    setEnteredEmailTouched(true);

    console.log(enteredName, enteredNumber, enteredEmail);

    setEnteredName("");
    setEnteredNumber("");
    setEnteredEmail("");

    setEnteredNameTouched(false);
    setEnteredNumberTouched(false);
    setEnteredEmailTouched(false);
  };

  // const nameInputClasses = nameInputIsInvalid
  //   ? "form-control invalid"
  //   : "form-control";
  // const numberInputClasses = numberInputIsInvalid
  //   ? "form-control invalid"
  //   : "form-control";
  // const emailInputClasses = emailInputIsInvalid
  //   ? "form-control invalid"
  //   : "form-control";

  return (
    <Modal>
      <h2>Korak 3. Vaši kontakt podaci:</h2>
      <form onSubmit={formSubmissionHandler}>
        <div>
          <div className="form-control">
            <input
              onBlur={nameBlurHandler}
              type="text"
              id="name"
              placeholder="Ime i prezime"
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
              placeholder="Broj mobitela"
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
            placeholder="Email"
            onChange={enteredEmailHandler}
            value={enteredEmail}
          />
          {emailInputIsInvalid && (
            <p className="error-text">
              E-mail je obavezan.
              <br />
              Mora sadržavati "@".
            </p>
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
        <div className="form-actions">
          <button onClick={previousStepHandler}>Nazad</button>
          <button disabled={!formIsValid} onClick={nextStepHandler}>Dalje</button>
        </div>
        {prevStep && <Korak2/>}
        {nextStep && <Korak4/>}
      </form>
    </Modal>
  );
};

export default Korak3;
