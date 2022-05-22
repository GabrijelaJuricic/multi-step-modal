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
          <p>{props.step1Value}</p>
        </div>
        <div className="step2">
          <div className="right_box">
            <h3>ODABRANE USLUGE</h3>
            <button className="btn" onClick={switchToServiceHandler}>
              Uredi
            </button>
          </div>
          <ul>
            {/* {props.step2Value.map((row) => {
              <li>
                {row.service}, {row.price}
              </li>;
            })} */}
          </ul>
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
          <p>{`Ime i prezime: ${props.step3Value.name}`}</p>
          <p>{`Broj mobitela: ${props.step3Value.number}`}</p>
        </div>
        <div className="step3_right">
          <p>{`Email adresa: ${props.step3Value.email}`}</p>
          <p>{`Napomena: ${props.step3Value.text}`}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Step4;
