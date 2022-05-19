import { Fragment, useState } from "react";
import tokicLogo from "./assets/tokic_logo.jpeg";
import "./App.css";
import Modal from "./components/Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(true);
  };

  return (
    <Fragment>
      <header className="header">
        <img className="logo" src={tokicLogo} />
        <div className="flex">
          <h2>Konfigurator servisa</h2>
          <p>Izračunajte trošak servisa</p>
        </div>
      </header>
      <main className="main">
        <p>Pritisnite gumb niže da biste pokrenuli</p>
        <button onClick={openModalHandler}>Pokreni konfigurator</button>
      </main>
      {isOpen && <Modal />}
    </Fragment>
  );
};

export default App;
