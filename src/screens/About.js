import "./styles/About.css";

import Typed from "typed.js";
import { useEffect, useRef } from "react";

const About = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web ",
        "Mobile",
        "Javascript",
        "HTML",
        "CSS",
        "REACT ",
        "NODE",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 120,
      backSpeed: 80,
      backDelay: 700,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: " !",
      autoInsertCss: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="about">
      <img
        src="https://i.ibb.co/BCbmTzX/title-Yannick-Lanteri.png"
        alt="Yannick Lanteri"
        className="titleYannickLanteri"
      ></img>
      <h2>
        Developpeur <span ref={el}></span>
      </h2>
      <div className="aboutBloc">
        <div className="aboutBlocText">
          <p>
            Anciennement Responsable Logistique, j'ai décidé de vivre de ma{" "}
            <span>passion</span> du code en passant par l'apprentissage{" "}
            <span>autodidacte</span> avec FreeCodeCamp et OpenClassRoom suivi
            d'une formation <span>développeur Javascript</span> à la Wild Code
            School.
          </p>
        </div>
        <div className="aboutBlocImg">
          {/* <img src="https://i.ibb.co/mHfn2hz/profil-User.png" alt="Profil User Ninja Y1N" className="profilUser"></img> */}
        </div>
      </div>
    </div>
  );
};

export default About;
