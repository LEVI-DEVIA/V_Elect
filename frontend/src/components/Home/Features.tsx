import React from "react";
import Feature from "../Features/Feature";
import { MdGppGood, MdLibraryAddCheck, MdLock, MdShare } from "react-icons/md";

const Features = () => {
  return (
    <div className="features-wrapper">
      <div className="title-large">Fonctionnalités</div>

      <div className="mobile-wrapper">
        <div>
          <Feature title="Immutabilité" icon={<MdLock />} align="right">
            <p>
              L'immutabilité désigne quelque chose qui ne peut être ni modifié ni altéré. C'est l'une des principales caractéristiques de la blockchain qui permet de garantir que la technologie restera telle qu'elle est, c'est-à-dire un réseau permanent et inaltérable.
            </p>
          </Feature>
        </div>

        <div className="mobile-container">
          <img src="/mobile.png" />
        </div>

        <div>
          <Feature title="SÉCURITÉ RENFORCÉE" icon={<MdGppGood />} align="left">
            <p>
              Grâce à son architecture décentralisée et à ses algorithmes de cryptage avancés, notre application offre une sécurité renforcée, garantissant l'intégrité et la confidentialité des données à chaque transaction
            </p>
          </Feature>
        </div>
        <div>
          <Feature title="Transparence" icon={<MdShare />} align="right">
            <p>
              Notre application permet de rendre transparent et vérifiable les transactions, ce qui favorise la confiance et la traçabilité des activités.
            </p>
          </Feature>
        </div>
        <div>
          <Feature
            title="DÉCENTRALISÉr"
            icon={<MdLibraryAddCheck />}
            align="left"
          >
            <p>
              Notre application tire pleinement parti de la technologie blockchain pour offrir une expérience véritablement décentralisée, permettant aux utilisateurs de prendre le contrôle de leurs données et de leurs transactions sans l'intervention d'une autorité centrale.
            </p>
          </Feature>
        </div>
      </div>
    </div>
  );
};

export default Features;
