import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="left">
        <div className="logo">
          <img src="logo.png" />
        </div>

        <div className="title-large">V_Elect</div>
        <div className="title-small">Le système de vôte du futur 🚀</div>

        <div className="button-wrapper">
          <Link to="/login">
            <button className="button-black">Connnexion</button>
          </Link>

          <Link to="/view">
            <button>Voir les vôtes</button>
          </Link>
        </div>
      </div>

      <div className="right">
        <img src="verifier.gif" />
      </div>
    </div>
  );
};

export default Landing;
