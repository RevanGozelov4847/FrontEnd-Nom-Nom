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
        >
          About the product
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

            {/* bu nedi bilmedim customer?*/}
          <p>eustoma</p> 
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <p>
           You deserve the best service, for this we use a risk-free delivery module. <br /> If the product is not according to your wishes during delivery (regardless of cash or non-cash payment), it is immediately returned and replaced with a new product of a higher price. <br />
            <br />
            <br /> Our dedicated employees are constantly working for the better.
            <br />
            <br />Delivery is free to Baku city center, and to Sumgayit, Khirdalan and Baku villages are estimated according to the area.{" "}
            <br />
            <br />
        You can get fast delivery according to pre-selected time and date.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
