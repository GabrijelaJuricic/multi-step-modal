import { useState } from "react";
import Korak1 from "./Korak1";
import Korak3 from "./Korak3";
import Modal from "./Modal";

const Korak2 = (props) => {
  const [nextStep, setNextStep] = useState(false);
  const [prevStep, setPrevStep] = useState(false);

const nextStepHandler = (event) => {
  setNextStep(true);
};

const previousStepHandler = (event) => {
  setPrevStep(true);
};

  return (
    <Modal>
      <h2>Korak 2. Odaberite jednu ili više usluga:</h2>
      <form>
        <input
          type="checkbox"
          name="service"
          value="500"
        />
        <label htmlFor="">Zamjena ulja i filtera (500 kn)</label>
        <input type="checkbox" name="service"/>
        <label htmlFor="">Promjena pakni (450 kn)</label>
        <input type="checkbox" name="service"/>
        <label htmlFor="">Promjena guma (100 kn)</label>
        <input type="checkbox" name="service"/>
        <label htmlFor="">Servis klima uređaja (299 kn)</label>
        <input type="checkbox" name="service"/>
        <label htmlFor="">Balansiranje guma (50 kn)</label>
        <input type="checkbox" name="service"/>
        <label htmlFor="">Zamjena ulja u kočnicama (229 kn)</label>
      </form>
      <div>
        <a href="coupon">
          Imam kupon
        </a>
        <input
        type="text"
          name="coupon"
          title="Unesite kod kupona ovdje"
        ></input>
        <button type="submit" value="Submit">
          Primijeni
        </button>
      </div>
      <div>
        <span><strong>Ukupno:</strong></span>
        <span>{`${""} kn`}</span>
      </div>
      <button onClick={previousStepHandler} >Previous</button>
      <button onClick={nextStepHandler}>Next</button>
      {prevStep && <Korak1/>}
      {nextStep && <Korak3/>}
    </Modal>
  );
};

export default Korak2;
