import React, { useState } from "react";
function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="containerr">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        > About the product
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Delivery
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <p>Info</p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <p>
          Our purpose is providing the best of the service, and to achive that we use the Risk Free Delivery Module.<br />If the product is delivered (cash or online does not matter), it is immediately refunded if it is not inappropriate for your request and is replaced with a higher value of a higher value. <br />
            <br />Delivery is executed fast with the Private NomNom Premium car.
            <br />
            <br /> Our special service employees always work continuously for better.
            <br />
            <br />Delivery is assessed in accordance with the territory of free, Sumgayit, Khirdalan and Baku villages for the Baku Center.{" "}
            <br />
            <br />
           You can get fast delivery in advance by the time and date.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
