import { Fragment, useState } from "react";
import Services from "./Services";
import "./Modal.css";

const Korak2 = (props) => {
  const [openCoupon, setOpenCoupon] = useState(false);
  const [enteredCoupon, setEnteredCoupon] = useState("");
  const [message, setMessage] = useState();
  const [totalAmount, setTotalAmount] = useState(0);

  const enteredCouponIsValid = enteredCoupon === "Tokić123";

  // === Dummy data ===

  var serviceItems = [
    { serviceItem: "Zamjena ulja i filtera", value: 500, id: 66 },
    { serviceItem: "Promjena pakni", value: 450, id: 87 },
    { serviceItem: "Promjena guma", value: 100, id: 73 },
    { serviceItem: "Servis klima uređaja", value: 299, id: 45 },
    { serviceItem: "Balansiranje guma", value: 50, id: 50 },
    { serviceItem: "Zamjena ulja u kočnicama", value: 229, id: 13 },
  ];

  // === Event Handlers ===

  const couponHandler = () => {
    setOpenCoupon(true);
  };

  const enteredCouponHandler = (event) => {
    setEnteredCoupon(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  // === ===

  const triggerCheckbox = () => {
    props.checkActive();
  };

  const addTotalAmount = (amount) => {
    setTotalAmount(totalAmount + amount);
  };

  //  === Coupon section ===

  const messageHandler = () => {
    if (enteredCouponIsValid) {
      setMessage("Hvala vam, unijeli ste ispravan kod kupona!");
    } else {
      setMessage("Neispravan kod, molimo vas pokušajte ponovno.");
    }
  };

  return (
    <Fragment>
      <form>
        <div>
          <ul>
            {serviceItems.map((option) => {
              return (
                <Services
                  onCheckbox={triggerCheckbox}
                  service={option.serviceItem}
                  price={option.value}
                  key={option.id}
                  onValue={addTotalAmount}
                />
              );
            })}
          </ul>
        </div>
      </form>
      <form onSubmit={submitHandler}>
        <a href="#coupon" onClick={couponHandler}>
          Imam kupon
        </a>
        {openCoupon && (
          <div id="coupon">
            <input
              type="text"
              name="coupon"
              placeholder="Unesite kod"
              value={enteredCoupon}
              onChange={enteredCouponHandler}
            />
            {message}
            {enteredCoupon && (
              <div>
                <p>OSNOVICA:</p> {`${0} kn`}
                <p>Popust (30%):</p> {`${0} kn`}
              </div>
            )}
            <button type="submit" value="Submit" onClick={messageHandler}>
              Primijeni
            </button>
          </div>
        )}
      </form>
      <div>
        <span>
          <strong>Ukupno:</strong>
        </span>
        <span>{`${totalAmount} kn`}</span>
      </div>
    </Fragment>
  );
};

export default Korak2;
