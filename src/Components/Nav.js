import "./styles/Nav.css";

import CV from "../assets/YannickLanteriCV.pdf";
import Ninja from "../assets/ninja2.png";

import { useEffect, useState } from "react";

const Nav = () => {
  // Changer la couleur du titre dans le menu

  const [hash, setHash] = useState(window.location.hash);

  window.addEventListener("hashchange", () =>
    setHash(window.location.hash.substring(1))
  );
  useEffect(() => {
    // console.log(hash);
    if (hash === "About") {
      document.querySelector("#About").style.color = "var(--gradientColor)";
      document.querySelector("#About").style.textShadow =
        "var(--thirdColor) 2px 1px 0";
      document.querySelector("#Skills").style.color = "var(--firstColor)";
      document.querySelector("#Skills").style.textShadow =
        "2px 2px 2px var(--secondColor)";
      document.querySelector("#Experience1").style.color = "var(--firstColor)";
      document.querySelector("#Experience1").style.textShadow =
        "2px 2px 2px var(--secondColor)";
      document.querySelector("#Contact").style.color = "var(--firstColor)";
      document.querySelector("#Contact").style.textShadow =
        "2px 2px 2px var(--secondColor)";
    } else if (hash === "Skills") {
      document.querySelector("#About").style.color = "var(--firstColor)";
      document.querySelector("#About").style.textShadow =
        "2px 2px 2px var(--secondColor)";
      document.querySelector("#Skills").style.color = "var(--gradientColor)";
      document.querySelector("#Skills").style.textShadow =
        "var(--thirdColor) 2px 1px 0";
      document.querySelector("#Experience1").style.color = "var(--firstColor)";
      document.querySelector("#Experience1").style.textShadow =
        "2px 2px 2px var(--secondColor)";
      document.querySelector("#Contact").style.color = "var(--firstColor)";
      document.querySelector("#Contact").style.textShadow =
        "2px 2px 2px var(--secondColor)";
    } else if (hash === "Experience1") {
      document.querySelector("#About").style.color = "var(--firstColor)";
      document.querySelector("#About").style.textShadow =
        "2px 2px 2px var(--secondColor)";
      document.querySelector("#Skills").style.color = "var(--firstColor)";
      document.querySelector("#Skills").style.textShadow =
        "2px 2px 2px var(--secondColor)";
      document.querySelector("#Experience1").style.color =
        "var(--gradientColor)";
      document.querySelector("#Experience1").style.textShadow =
        "var(--thirdColor) 2px 1px 0";
      document.querySelector("#Contact").style.color = "var(--firstColor)";
      document.querySelector("#Contact").style.textShadow =
        "2px 2px 2px var(--secondColor)";
    } else if (hash === "Contact") {
      document.querySelector("#About").style.color = "var(--firstColor)";
      document.querySelector("#About").style.textShadow =
        "2px 2px 2px var(--secondColor)";
      document.querySelector("#Skills").style.color = "var(--firstColor)";
      document.querySelector("#Skills").style.textShadow =
        "2px 2px 2px var(--secondColor)";
      document.querySelector("#Experience1").style.color = "var(--firstColor)";
      document.querySelector("#Experience1").style.textShadow =
        "2px 2px 2px var(--secondColor)";
      document.querySelector("#Contact").style.color = "var(--gradientColor)";
      document.querySelector("#Contact").style.textShadow =
        "var(--thirdColor) 2px 1px 0";
    }
  }, [hash]);

  return (
    <div className="nav">
      {/* <img className="ninjaLogo" src={Ninja} alt="ninja"></img> */}
      <ul className="navList" id="myMenu">
        <li data-menuanchor="About">
          <a href="#About" id="About">
            À propos
          </a>
        </li>
        <li data-menuanchor="Skills">
          <a href="#Skills" id="Skills">
            Compétences
          </a>
        </li>
        <li data-menuanchor="Experience1">
          <a href="#Experience1" id="Experience1">
            Expériences
          </a>
        </li>
        <li data-menuanchor="Contact">
          <a href="#Contact" id="Contact">
            Contact
          </a>
        </li>
        <li data-menuanchor="CV" id="navCV">
          <a href={CV} target="_blank" rel="noopener noreferrer">
            CV
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
