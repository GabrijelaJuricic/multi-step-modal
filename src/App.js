import { Fragment, useState } from "react";
import tokicLogo from "./assets/tokic_logo.jpeg";
import classes from "./App.module.css";
import Card from "./UI/Card";
import Korak1 from "./components/Korak1";
import Korak2 from "./components/Korak2";
import Korak3 from "./components/Korak3";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = (event) => {
    setIsOpen(true);
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <img className={classes.img} src={tokicLogo} />
        <h3>Konfigurator servisa</h3>
        <p>Izračunajte trošak servisa</p>
      </header>
      <main className={classes.main}>
        <p>Pritisnite gumb niže da biste pokrenuli</p>
        <button onClick={openModalHandler}>Pokreni konfigurator</button>
      </main>

      {isOpen && <Korak1 />}
    </Fragment>
  );
};

export default App;
