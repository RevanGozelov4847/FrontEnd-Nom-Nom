import React from "react";
import { Link } from "react-router-dom";
import professional1 from "";
import professional2 from "";
import professional3 from "";
import professional4 from "";
import professional5 from "";

const Professionals = () => {
  return (
    <section>
      <div className="containerMore">
        <p className="title">Professionals with Quotes</p>
        <p className="description-1">
          Olee-da olan bütün məhsullar geri qaytarma.
        </p>
        <p className="description-2">
          Sifarişlərinizi həm təhvil alarkən qapıda.
        </p>
        <div className="professionalImages">
          <div className="professional-left">
            <Link to={"/products"}>
              <div className="professional-left-1">
                <img className="professional1" src={professional1} alt="" />
                <button className="button">Professional_Name1</button>
              </div>
            </Link>

            <Link to={"/products"}>
              <div className="professional-left-2">
                <img className="professional2" src={professional2} alt="" />
                <button className="button">Professional_Name2</button>
              </div>
            </Link>
          </div>

          <Link to={"/products"}>
            <div className="professional-center">
              <div className="professional-center-1">
                <img className="professional3" src={professional3} alt="" />
                <button className="button">Professional_Name3</button>
              </div>
            </div>
          </Link>

          <div className="professional-right">
            <Link to={"/products"}>
              <div className="professional-right-1">
                <img className="professional4" src={professional4} alt="" />
                <button className="button">Professional_Name4</button>
              </div>
            </Link>

            <Link to={"/products"}>
              <div className="professional-right-2">
                <img className="professional5" src={professional5} alt="" />
                <button className="button">Professional_Name5</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professionals;
