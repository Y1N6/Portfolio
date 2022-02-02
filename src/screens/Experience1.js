import "./styles/Experience.css";

import Poudlard from "../assets/Poudlard1.png";
import StarLove from "../assets/StarLove.png";
import VDN from "../assets/vdn3.png";

const Experience = () => {
  return (
    <div className="experience">
      <h1>Experience </h1>
      <div className="slide">
        <div className="vDNews">
          <div className="slideText">
            <h2>Projet 2 : Veilleurs de News</h2>
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
            <h3>HardSkills utilisé :</h3>
            <p>
              React, Js, Mysql, Node, Api, Locastorage, Git/hub, Trello, SCRUM,
              HTML, CSS, Metadonnées
            </p>
          </div>
          <div className="slideImg">
            <img src={VDN} alt="veilleur de news"></img>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="starLove">
          <div className="slideText">
            <h2>Hackaton : Starlove</h2>
            <h3>HardSkills utilisé :</h3>
            <p>React, Js, HTML, CSS, Api, Git/hub, Trello,</p>
            <h3>Objectif :</h3>
            <p>Consoomer l'Api Starwars</p>
            <h3>Details :</h3>
            <p>
              Site type Chatroulette avec rencontre aléatoire, Chat intégré avec
              réponse automatique
            </p>
          </div>
          <div className="slideImg">
            <img src={StarLove} alt="Starlove"></img>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="poudlard">
          <div className="slideText">
            <h2>Projet 1 : Poudlard academy</h2>
            <h3>HardSkills utilisé :</h3>
            <p>HTML, CSS, Javascript, Git/hub</p>
            <h3>Objectif :</h3>
            <p>Création d'un premier site fictif de l'école de Poudlard</p>
            <h3>Details :</h3>
            <p>
              Création d'un menu, footer, responsible mobile first, intégration
              Google Map
            </p>
          </div>
          <div className="slideImg">
            <img src={Poudlard} alt="Poudlard Academy"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
