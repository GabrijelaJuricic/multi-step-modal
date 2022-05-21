import { Fragment } from "react";

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
      <div>
        <h3>MODEL VOZILA</h3>
        <button onClick={switchToModelHandler}>Uredi</button>
        <p>{"car"}</p>
      </div>
      <div>
        <h3>ODABRANE USLUGE</h3>
        <button onClick={switchToServiceHandler}>Uredi</button>
        <p>{"service"}</p>
      </div>
      <div>
        <h3>KONTAKT PODACI</h3>
        <button onClick={switchToContactHandler}>Uredi</button>
        <p>{"contact info"}</p>
      </div>
    </Fragment>
  );
};

export default Step4;
