import { useState } from "react";
import classes from "./Korak1.module.css";
import Korak2 from "./Korak2";
import Modal from "./Modal";

const Korak1 = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [nextStep, setNextStep] = useState(false);

  const selectHandler = (event) => {
    setIsSelected(true);
  };
  
  const nextStepHandler = (event) => {
    setNextStep(true);
  };

  let formIsValid = false;
  if (isSelected) {
    formIsValid = true;
  }


  return (
    <Modal>
      <h2>Korak 1. Odaberite proizvođača vašeg vozila:</h2>
      <form>
        <div>
          <label htmlFor="Peugeot">Peugeot</label>
          <input
            onClick={selectHandler}
            type="radio"
            id="Peugeot"
            name="cars"
          />

          <label htmlFor="Volkswagen">Volkswagen</label>
          <input
            onClick={selectHandler}
            type="radio"
            id="Volkswagen"
            name="cars"
          />

          <label htmlFor="Citroen">Citroen</label>
          <input
            onClick={selectHandler}
            type="radio"
            id="Citroen"
            name="cars"
          />

          <label htmlFor="Audi">Audi</label>
          <input onClick={selectHandler} type="radio" id="Audi" name="cars" />

          <label htmlFor="Bmw">Bmw</label>
          <input onClick={selectHandler} type="radio" id="Bmw" name="cars" />

          <label htmlFor="Seat">Seat</label>
          <input onClick={selectHandler} type="radio" id="Seat" name="cars" />

          <label htmlFor="Alfa Romeo">Alfa Romeo</label>
          <input
            onClick={selectHandler}
            type="radio"
            id="Alfa Romeo"
            name="cars"
          />

          <label htmlFor="Kia">Kia</label>
          <input onClick={selectHandler} type="radio" id="Kia" name="cars" />

          <label htmlFor="Hyundai">Hyundai</label>
          <input
            onClick={selectHandler}
            type="radio"
            id="Hyundai"
            name="cars"
          />

          <label htmlFor="Honda">Honda</label>
          <input onClick={selectHandler} type="radio" id="Honda" name="cars" />

          <label htmlFor="Toyota">Toyota</label>
          <input onClick={selectHandler} type="radio" id="Toyota" name="cars" />
        </div>
      </form>
      <button
        disabled={!formIsValid}
        className={classes.button}
        onClick={nextStepHandler}
      >
        Dalje
      </button>
      {nextStep && <Korak2 />}
    </Modal>
  );
};

export default Korak1;
