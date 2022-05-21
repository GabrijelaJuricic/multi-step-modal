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

  // === Dummy data ===

  const stepInstructions = [
    "Korak 1. Odaberite proizvođača vašeg vozila",
    "Korak 2. Odaberite jednu ili više usluga",
    "Korak 3. Vaši kontakt podaci",
    "Korak 4. Pregled i potvrda vašeg odabira",
    "Korak 5. Vaša prijava je uspješno poslana",
  ];

  // === Pages ===

  const pageDisplay = () => {
    switch (page) {
      case 0:
        return <Step1 radioActive={formValidity} />;
      case 1:
        return <Step2 checkActive={formValidity} />;
      case 2:
        return <Step3 inputActive={step3Validity} />;
      case 3:
        return (
          <Step4
            summaryActive={step4Validity}
            switchToModel={switchModelFunc}
            switchToService={switchServiceFunc}
            switchToContact={switchContactFunc}
          />
        );
      case 4:
        return <Step5 />;
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
    setFormIsValid("");
    setPage((currPage) => currPage - 1);
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
          <div>
            <h1 className="title">Konfigurator servisa</h1>
            <h3>{stepInstructions[page]}</h3>
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
