import { Fragment } from "react";

const Korak4 = () => {
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

  return (
    <Fragment>
      {message}
      <div>
        <h3>MODEL VOZILA</h3>
        <button>Uredi</button>
        <p>Folcika</p>
      </div>
      <div>
        <h3>ODABRANE USLUGE</h3>
        <button>Uredi</button>
        <p>tralalala</p>
      </div>
      <div>
        <h3>KONTAKT PODACI</h3>
        <button>Uredi</button>
        <p>tra</p>
      </div>
    </Fragment>
  );
};

export default Korak4;
