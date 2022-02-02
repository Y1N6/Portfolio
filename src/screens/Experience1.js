import "./styles/Experience.css";

import { useState, useEffect } from "react";

const Experience = () => {
  const [poudlard, setPoudlard] = useState(false);
  const [starLove, setStarLove] = useState(false);
  const [vDNews, setVDNews] = useState(false);

  const poudlardHover = () => {
    setPoudlard(!poudlard);
  };

  const starLoveHover = () => {
    setStarLove(!starLove);
  };

  const vDNewsHover = () => {
    setVDNews(!vDNews);
  };

  return (
    <div className="experience">
      <h1>Experience </h1>
      <div className="experienceFirstLine">
        <div
          className="experienceImg"
          onMouseEnter={vDNewsHover}
          onMouseLeave={vDNewsHover}
        >
          {vDNews ? (
            <div className="vDNewsHover">
              <h2>Projet 2 : Veilleurs de News</h2>
              <h3>HardSkills utilisé :</h3>
              <p>
                React, Js, Mysql, Node, Api, Locastorage, Git/hub, Trello,
                SCRUM, HTML, CSS, Metadonnées
              </p>
              <h3>Objectif :</h3>
              <p>
                Regrouper les actualités hebdomadaire de la promo sur un site
                interactif
              </p>
              <h3>Details :</h3>
              <p>
                Création de base de données, Dark mode, filtres de recherche,
                favoris en localstorage, Metadonnées pour créer des miniatures
                visuel
              </p>
            </div>
          ) : (
            <div className="vDNews"></div>
          )}
        </div>
        <div
          className="experienceImg"
          onMouseEnter={starLoveHover}
          onMouseLeave={starLoveHover}
        >
          {starLove ? (
            <div className="starLoveHover">
              <h2>Hackaton : Starlove</h2>
              <h3>HardSkills utilisé :</h3>
              <p>React, Js, HTML, CSS, Api, Git/hub, Trello,</p>
              <h3>Objectif :</h3>
              <p>Consoomer l'Api Starwars</p>
              <h3>Details :</h3>
              <p>
                Site type Chatroulette avec rencontre aléatoire, Chat intégré
                avec réponse automatique
              </p>
            </div>
          ) : (
            <div className="starLove"></div>
          )}
        </div>
        <div
          className="experienceImg"
          onMouseEnter={poudlardHover}
          onMouseLeave={poudlardHover}
        >
          {poudlard ? (
            <div className="poudlardHover">
              <h2>Projet 1 : Poudlard academy</h2>
              <h3>HardSkills utilisé :</h3>
              <p>HTML, CSS, Javascript, Git/hub</p>
              <h3>Objectif :</h3>
              <p>Création d'un premier site fictif de l'école de Poudlard</p>
              <h3>Details :</h3>
              <p>
                Création d'un menu, footer, responsible mobile first,
                intégration Google Map
              </p>
            </div>
          ) : (
            <div className="poudlard"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
