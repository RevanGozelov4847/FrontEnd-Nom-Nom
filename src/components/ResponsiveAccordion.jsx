import React, { useState } from "react";

function ResponsiveAccordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <div className={`arrow ${isOpen ? "up" : ""}`}></div>
      </div>
      <div className="accordion-content">
        <div className="accordion-content-inner">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const accordionData = [
    {
      id: 1,
      title: "About the product",
      content: "info",
    },
    {
      id: 2,
      title: "Delivery",
      content:
        "Our purpose is providing the best of the service, and to achive that we use the Risk Free Delivery Module. If the product is delivered (cash or online does not matter), it is immediately refunded if it is not inappropriate for your request and is replaced with a higher value of a higher value.Delivery is executed fast with the Private NomNom Premium car. Our special service employees always work continuously for better. Delivery is assessed in accordance with the territory of free, Sumgayit, Khirdalan and Baku villages for the Baku Center. You can get fast delivery in advance by the time and date."
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(id === openAccordion ? null : id);
  };

  return (
    <div className="app">
      {accordionData.map((accordion) => (
        <ResponsiveAccordion
          key={accordion.id}
          title={accordion.title}
          content={accordion.content}
          isOpen={accordion.id === openAccordion}
          toggleAccordion={() => toggleAccordion(accordion.id)}
        />
      ))}
    </div>
  );
}

export default App;
