import { Fragment, useRef, useState } from "react";
import Services from "./Services";
import "./Step2.css";

const Step2 = (props) => {
  const [openCoupon, setOpenCoupon] = useState(false);
  const [showLink, setShowLink] = useState(true);
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
  const addTotalAmount = (amount) => {
    setTotalAmount(totalAmount + amount);
  };

  //  === Coupon section ===
  const messageHandler = () => {
    const enteredCoupon = couponInputRef.current.value;

    if (enteredCoupon.trim().toString() === "Tokić123") {
      setCouponSuccessMessage("Hvala vam, unijeli ste ispravan kod kupona!");
      setCouponErrorMessage("");
      setShowLink(false);
    } else {
      setCouponErrorMessage("Neispravan kod, molimo vas pokušajte ponovno.");
      setCouponSuccessMessage("");
      setShowLink(true);
    }
  };

  return (
    <Fragment>
      <form>
        <div className="checkbox">
          <ul>
            {serviceItems.map((option) => {
              return (
                <Services
                  service={option.serviceItem}
                  price={option.value}
                  key={option.id}
                  onValue={addTotalAmount}
                  onServiceChange={props.returnSelected}
                />
              );
            })}
          </ul>
        </div>
      </form>
      <div className="coupon">
        <form onSubmit={submitHandler}>
          {!openCoupon && (
            <a href="#" onClick={couponHandler}>
              Imam kupon
            </a>
          )}

          {openCoupon && (
            <div id="coupon">
              {showLink ? (
                <div className="coupon_input">
                  <input
                    ref={couponInputRef}
                    type="text"
                    name="coupon"
                    placeholder="Unesite kod"
                  />
                  <button type="submit" value="Submit" onClick={messageHandler}>
                    Primijeni
                  </button>
                </div>
              ) : null}
              {couponErrorMessage && (
                <div className="message">
                  <p className="coupon_error_message">{couponErrorMessage}</p>
                </div>
              )}
              {couponSuccessMessage && (
                <div className="message">
                  <p className="coupon_success_message">
                    {couponSuccessMessage}
                  </p>
                  <p className="coupon_calculation_message">
                    OSNOVICA: <strong>{`${totalAmount.toFixed(2)} kn`}</strong>
                  </p>
                  <p className="coupon_calculation_message">
                    Popust (30%):{" "}
                    <strong>{`${(totalAmount.toFixed(2) * -0.3).toFixed(
                      2
                    )} kn`}</strong>
                  </p>
                </div>
              )}
            </div>
          )}
        </form>
        <div className="total_amount">
          <span>
            <strong>UKUPNO: </strong>
          </span>
          {couponSuccessMessage ? (
            <span>
              <strong>{`${(totalAmount * 0.7).toFixed(2)} kn`}</strong>
            </span>
          ) : (
            <span>
              <strong>{`${totalAmount.toFixed(2)} kn`}</strong>
            </span>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Step2;
