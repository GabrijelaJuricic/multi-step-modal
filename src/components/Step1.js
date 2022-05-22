import { Fragment, useState } from "react";
import BrandItem from "./BrandItem";
import "./Step1.css";

const Step1 = (props) => {
  // === Dummy data ===
  var cars = [
    { name: "Peugeot", id: 1, value: "peugeot" },
    { name: "Volkswagen", id: 2, value: "volkswagen" },
    { name: "Citroen", id: 3, value: "citroen" },
    { name: "Audi", id: 4, value: "audi" },
    { name: "BMW", id: 5, value: "bmw" },
    { name: "Seat", id: 6, value: "" },
    { name: "Alfa Romeo", id: 7, value: "alfa-romeo" },
    { name: "Kia", id: 8, value: "kia" },
    { name: "Hyundai", id: 9, value: "hyundai" },
    { name: "Honda", id: 10, value: "honda" },
    { name: "Toyota", id: 11, value: "toyota" },
  ];

  const triggerRadio = () => {
    props.radioActive();
  };

  return (
    <Fragment>
      <form>
        <div className="radio">
          <ul>
            {cars.map((brand) => {
              return (
                <BrandItem
                  name={brand.name}
                  onRadio={triggerRadio}
                  key={brand.id}
                  value={brand.value}
                  updateSelectedValue={props.returnSelected}
                />
              );
            })}
          </ul>
        </div>
      </form>
    </Fragment>
  );
};

export default Step1;
