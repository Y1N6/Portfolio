import "./styles/Experience.css";

import Poudlard from "../assets/Poudlard1.png";
import StarLove from "../assets/StarLove.png";
import VDN from "../assets/vdn3.png";
import WinaGlade from "../assets/winaGlade.png";
import Pizza from "../assets/pizza2.jpg";

const Experience = () => {
  return (
    <div className="experience">
      <h1>Experiences </h1>
      <div className="slide">
        <div className="slideBloc">
          <div className="slideText">
            <h2>Client : Pizzeria</h2>
            <h3>Objectif :</h3>
            <p>Créer un site vitre pour commander des pizzas</p>
            <h3>Details :</h3>
            <p>Création d'un site interactif, utilisant une api du menu</p>
            <h3>HardSkills :</h3>
            <p>React, Js, Node, Git/hub, HTML, CSS, Api</p>
          </div>
          <div className="slideImg">
            <h2>Client : Pizzeria</h2>
            <a
              className="slideBlocRepos"
              target="_blank"
              rel="noopener noreferrer"
              href="https://y1n6.github.io/pizzeria/"
            >
              <img src={Pizza} alt="veilleur de news"></img>
            </a>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="slideBloc">
          <div className="slideText">
            <h2>Hackaton : WinaGlade</h2>
            <h3>Objectif :</h3>
            <p>Ramener une technologie actuelle dans le passé</p>
            <h3>Details :</h3>
            <p>
              Création d'un site de paris sportif autour des gladiateurs,
              échange entre back et front sur la base de données
            </p>
            <h3>HardSkills :</h3>
            <p>React, Js, Mysql, Node, Git/hub, HTML, CSS, Base de données</p>
          </div>
          <div className="slideImg">
            <h2>Hackaton : WinaGlade</h2>
            <a
              className="slideBlocRepos"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Y1N6/MunschThomas-Winaglade_Frontend_Wcs_02-2022/tree/dev"
            >
              <img src={WinaGlade} alt="veilleur de news"></img>
            </a>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="slideBloc">
          <div className="slideText">
            <h2>Projet 2 : Veilleurs de News</h2>
            <h3>Objectif :</h3>
            <p>
              Regrouper les actualitées hebdomadaire de la promo sur un site
              interactif
            </p>
            <h3>Details :</h3>
            <p>
              Création de base de données, Dark mode, filtres de recherches,
              favoris en localStorage, Metadonnées pour créer des miniatures
              visuel
            </p>
            <h3>HardSkills :</h3>
            <p>
              React, Js, Mysql, Node, Api, Localstorage, Git/hub, Trello, SCRUM,
              HTML, CSS, Metadonnées
            </p>
          </div>
          <div className="slideImg">
            <h2>Projet 2 : Veilleurs de News</h2>
            <a
              className="slideBlocRepos"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Y1N6/11-21-noBugNovember-G2-Front/tree/dev/"
            >
              <img src={VDN} alt="veilleur de news"></img>
            </a>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="slideBloc">
          <div className="slideText">
            <h2>Hackaton : Starlove</h2>
            <h3>Objectif :</h3>
            <p>Consommer l'Api Starwars</p>
            <h3>Details :</h3>
            <p>
              Site de rencontre type chat avec rencontre aléatoire, un chat
              intégré avec réponse automatique
            </p>
            <h3>HardSkills :</h3>
            <p>React, Js, HTML, CSS, Api, Git/hub, Trello,</p>
          </div>
          <div className="slideImg">
            <h2>Hackaton : Starlove</h2>
            <a
              className="slideBlocRepos"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Y1N6/Hackaton-12-2021-StarLove"
            >
              <img src={StarLove} alt="Starlove"></img>
            </a>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="slideBloc">
          <div className="slideText">
            <h2>Projet 1 : Poudlard academy</h2>
            <h3>Objectif :</h3>
            <p>Création d'un premier site fictif de l'école de Poudlard</p>
            <h3>Details :</h3>
            <p>
              Création d'un menu, footer, responsive mobile first, intégration
              Google Map
            </p>
            <h3>HardSkills :</h3>
            <p>HTML, CSS, Javascript, Git/hub</p>
            <p>Github :</p>
          </div>
          <div className="slideImg">
            <h2>Projet 1 : Poudlard academy</h2>
            <a
              className="slideBlocRepos"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Y1N6/WCS-Projet1-2021-Poudlard"
            >
              <img src={Poudlard} alt="Poudlard Academy"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
