import ReactDOM from "react-dom";
import { Fragment, useState } from "react";
import "./Modal.css";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

const Backdrop = () => {
  return <div className="backdrop"></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const [page, setPage] = useState(0);
  const [formIsValid, setFormIsValid] = useState(false);
  const [step1Value, setStep1Value] = useState();
  const [step2Value, setStep2Value] = useState([]);
  const [step3Value, setStep3Value] = useState();

  // === Dummy data ===
  const stepInstructions = [
    "Korak 1. Odaberite proizvođača vašeg vozila",
    "Korak 2. Odaberite jednu ili više usluga",
    "Korak 3. Vaši kontakt podaci",
    "Korak 4. Pregled i potvrda vašeg odabira",
    "",
  ];

  // === Helper functions ===
  const selectedServicesChangesHandler = (service, price, subtract) => {
    if (
      !subtract &&
      step2Value.filter((e) => e.service == service).length == 0
    ) {
      setStep2Value((step2Value) => [
        ...step2Value,
        { service: service, price: price },
      ]);
      setFormIsValid(true);
    } else if (subtract) {
      setStep2Value((step2Value) =>
        step2Value.filter((e) => e.service !== service)
      );
      if (step2Value.length == 1) {
        setFormIsValid(false);
      }
    }
  };

  // === Pages ===
  const pageDisplay = () => {
    switch (page) {
      case 0:
        return (
          <Step1 radioActive={formValidity} returnSelected={setStep1Value} />
        );
      case 1:
        return <Step2 returnSelected={selectedServicesChangesHandler} />;
      case 2:
        return (
          <Step3 inputActive={step3Validity} returnSelected={setStep3Value} />
        );
      case 3:
        return (
          <Step4
            summaryActive={step4Validity}
            switchToModel={switchModelFunc}
            switchToService={switchServiceFunc}
            switchToContact={switchContactFunc}
            step1Value={step1Value}
            step2Value={step2Value}
            step3Value={step3Value}
          />
        );
      case 4:
        return <Step5 onClose={props.onClose} />;
    }
  };

  //  === Validity check ===
  const formValidity = () => {
    setFormIsValid(true);
  };

  const step3Validity = (value) => {
    setFormIsValid(value);
  };

  const step4Validity = () => {
    setFormIsValid(!formIsValid);
  };

  // === Step 4: Switch functions ===
  const switchModelFunc = () => {
    setPage((currPage) => {
      return currPage - 3;
    });
  };

  const switchServiceFunc = () => {
    setPage((currPage) => {
      return currPage - 2;
    });
  };

  const switchContactFunc = () => {
    setPage((currPage) => {
      return currPage - 1;
    });
  };

  // === Previous & Next button ===
  const prevHandler = () => {
    setPage((currPage) => currPage - 1);
    setFormIsValid("");
  };

  const onClickHandler = () => {
    if (formIsValid) {
      setPage((currPage) => currPage + 1);
      setFormIsValid("");
    }
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("overlays"))}
      {ReactDOM.createPortal(
        <ModalOverlay>
          <div className="title">
            <h1>Konfigurator servisa</h1>
            <h3 className="subtitle">{stepInstructions[page]}</h3>
          </div>
          <div className="body">{pageDisplay()}</div>
          <div className="footer">
            <button hidden={page === 0 || page === 4} onClick={prevHandler}>
              Nazad
            </button>
            <button
              hidden={page === 4}
              onClick={onClickHandler}
              disabled={!formIsValid}
            >
              {page === 3 ? "Pošalji" : "Dalje"}
            </button>
          </div>
        </ModalOverlay>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};

export default Modal;
