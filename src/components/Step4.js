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
          <div className="title_button_box">
            <h3>MODEL VOZILA</h3>
            <button className="btn" onClick={switchToModelHandler}>
              Uredi
            </button>
          </div>
          <p>{props.step1Value}</p>
        </div>
        <div className="step2">
          <div className="title_button_box">
            <h3>ODABRANE USLUGE</h3>
            <button className="btn" onClick={switchToServiceHandler}>
              Uredi
            </button>
          </div>
          <ul>
            {props.step2Value.map((services) => {
              return (
                <li className="row" key={props.id}>
                  <p>{services.service}</p>
                  {`${services.price} kn`}
                </li>
              );
            })}
          </ul>

          <div className="row" id="discount">
            Popust (30%): {"-285,00 kn"}
          </div>
          <div className="row" id="total">
            UKUPNO: {"665,00 kn"}
          </div>
        </div>
      </div>
      <div className="overview_row_2">
        <div className="step3_left">
          <div className="title_button_box">
            <h3>KONTAKT PODACI</h3>
            <button className="btn" onClick={switchToContactHandler}>
              Uredi
            </button>
          </div>
          <div className="row">
            <p>Ime i prezime:</p>
            {props.step3Value.name}
          </div>
          <div className="row">
            <p>Broj mobitela:</p>
            {props.step3Value.number}
          </div>
        </div>
        <div className="step3_right">
          <div className="row">
            <p>Email adresa:</p>
            {props.step3Value.email}
          </div>
          <div className="row">
            <p>Napomena:</p>
            {props.step3Value.text}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Step4;
