import ReactDOM from "react-dom";
import { Fragment, useState } from "react";
import "./Modal.css";

import Korak1 from "./Korak1";
import Korak2 from "./Korak2";
import Korak3 from "./Korak3";
import Korak4 from "./Korak4";
import Korak5 from "./Korak5";

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

const Modal = () => {
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
        return <Korak1 radioActive={formValidity} />;
      case 1:
        return <Korak2 checkActive={formValidity} />;
      case 2:
        return <Korak3 inputActive={step3Validity} />;
      case 3:
        return <Korak4 />;
      case 4:
        return <Korak5 />;
    }
  };

  const formValidity = () => {
    setFormIsValid(true);
  };

  const step3Validity = (value) => {
    setFormIsValid(value);
    console.log("Step3 validity!");
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
      console.log("formIsValid u onClickHandleru <Modal/>");
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
