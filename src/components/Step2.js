import { Fragment, useRef, useState } from "react";
import Services from "./Services";
import "./Modal.css";

const Step2 = (props) => {
  const [openCoupon, setOpenCoupon] = useState(false);
  const [couponSuccessMessage, setCouponSuccessMessage] = useState();
  const [couponErrorMessage, setCouponErrorMessage] = useState();
  const [totalAmount, setTotalAmount] = useState(0);

  const couponInputRef = useRef();

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
    const enteredCoupon = couponInputRef.current.value;

    if (enteredCoupon.trim().toString() === "Tokić123") {
      setCouponSuccessMessage("Hvala vam, unijeli ste ispravan kod kupona!");
      setCouponErrorMessage("");
    } else {
      setCouponErrorMessage("Neispravan kod, molimo vas pokušajte ponovno.");
      setCouponSuccessMessage("");
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
        {!openCoupon && (
          <a href="#coupon" onClick={couponHandler}>
            Imam kupon
          </a>
        )}

        {openCoupon && (
          <div id="coupon">
            <input
              ref={couponInputRef}
              type="text"
              name="coupon"
              placeholder="Unesite kod"
            />
            <button type="submit" value="Submit" onClick={messageHandler}>
              Primijeni
            </button>
            {couponErrorMessage && (
              <div>
                <p>{couponErrorMessage}</p>
              </div>
            )}
            {couponSuccessMessage && (
              <div>
                <p>{couponSuccessMessage}</p>
                <p>OSNOVICA: {`${totalAmount} kn`}</p>
                <p>Popust (30%): {`${totalAmount * -0.3} kn`}</p>
              </div>
            )}
          </div>
        )}
      </form>
      <div>
        <span>
          <strong>Ukupno: </strong>
        </span>
        {couponSuccessMessage ? (
          <span>{`${totalAmount * 0.7} kn`}</span>
        ) : (
          <span>{`${totalAmount} kn`}</span>
        )}
      </div>
    </Fragment>
  );
};

export default Step2;
