import { Fragment } from "react";
import "./Step4.css";

const Step4 = (props) => {
  // === Dummy data ===

  var message = (
    <p>
      Molimo vas da još jednom pregledate i potvrdite unesene podatke. Ukoliko
      Želite promijeniti neki od podataka, možete pritisnuti gumb za uređivanje
      pored svake od kategorija. Kada ste provjerili i potvrdili ispravnost
      svojih podataka, pritisnite gumb "Pošalji" na dnu za slanje upita za
      servis.
    </p>
  );

  props.summaryActive();

  // === Event Handlers ===

  const switchToModelHandler = () => {
    props.switchToModel();
  };

  const switchToServiceHandler = () => {
    props.switchToService();
  };
  const switchToContactHandler = () => {
    props.switchToContact();
  };

  return (
    <Fragment>
      {message}
      <div className="overview_row_1">
        <div className="step1">
          <div className="left_box">
            <h3>MODEL VOZILA</h3>
            <button className="btn" onClick={switchToModelHandler}>
              Uredi
            </button>
          </div>
          <p>{"car"}</p>
        </div>
        <div className="step2">
          <div className="right_box">
            <h3>ODABRANE USLUGE</h3>
            <button className="btn" onClick={switchToServiceHandler}>
              Uredi
            </button>
          </div>
          <p>{"service"}</p>
        </div>
      </div>
      <div className="overview_row_2">
        <div className="step3_left">
          <div className="left_box">
            <h3>KONTAKT PODACI</h3>
            <button className="btn" onClick={switchToContactHandler}>
              Uredi
            </button>
          </div>
          <p>{"contact info"}</p>
        </div>
        <div className="step3_right">
          <p>{"contact info"}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Step4;
