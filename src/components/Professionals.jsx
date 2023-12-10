import React from "react";
import { Link } from "react-router-dom";
import prof1 from "";
import prof2 from "";
import prof3 from "";
import prof4 from "";
import prof5 from "";

const Professionals = () => {
  return (
    <section>
      <div className="containerMore">
        <p className="title">Dieticians and Nutritionists</p>
        <p className="description-1">
            You Can See all Dieticians and Nutritionists 
        </p>
        <p className="description-2">
           Dieticians and Nutritionists with Their Quotes
        </p>
        <div className="profImages">
          <div className="prof-left">
            <Link to={"/products"}>
              <div className="prof-left-1">
                <img className="prof1" src={prof1} alt="" />
                <button className="button">Dr. Megan Rossi</button>
              </div>
            </Link>

            <Link to={"/products"}>
              <div className="prof-left-2">
                <img className="prof2" src={prof2} alt="" />
                <button className="button">Tim Spector </button>
              </div>
            </Link>
          </div>

          <Link to={"/products"}>
            <div className="prof-center">
              <div className="prof-center-1">
                <img className="prof3" src={prof3} alt="" />
                <button className="button">Christy Harrison</button>
              </div>
            </div>
          </Link>

          <div className="prof-right">
            <Link to={"/products"}>
              <div className="prof-right-1">
                <img className="prof4" src={prof4} alt="" />
                <button className="button"> Alissa Rumsey </button>
              </div>
            </Link>

            <Link to={"/products"}>
              <div className="prof-right-2">
                <img className="prof5" src={prof5} alt="" />
                <button className="button">Rhiannon Lambert</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professionals;
