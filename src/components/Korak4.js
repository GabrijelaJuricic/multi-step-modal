import { useState } from "react";
import Korak3 from "./Korak3";
import Korak5 from "./Korak5";
import Modal from "./Modal";

const Korak4 = () => {
  const [nextStep, setNextStep] = useState(false);
  const [prevStep, setPrevStep] = useState(false);

  const previousStepHandler = (event) => {
    setPrevStep(true);
  };

  const nextStepHandler = (event) => {
    setNextStep(true);
  };

  return (
    <Modal>
      <h2>Korak 4. Pregled i potvrda vašeg odabira</h2>
      <p>
        Molimo vas da još jednom pregledate i potvrdite unesene podatke. Ukoliko
        Želite promijeniti neki od podataka, možete pritisnuti gumb za
        uređivanje pored svake od kategorija. Kada ste provjerili i potvrdili
        ispravnost svojih podataka, pritisnite gumb "Pošalji" na dnu za slanje
        upita za servis.
      </p>
      <br></br>
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
      <button onClick={previousStepHandler}>Nazad</button>
      <button onClick={nextStepHandler}>Pošalji</button>
      {prevStep && <Korak3 />}
      {nextStep && <Korak5 />}
    </Modal>
  );
};

export default Korak4;
