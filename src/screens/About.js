import './styles/About.css'


const About = () => {
    return (
        <div className="about">
            <img src="https://i.ibb.co/BCbmTzX/title-Yannick-Lanteri.png" alt="Yannick Lanteri" className="titleYannickLanteri"></img>
            <h2>Developpeur Web et Mobile</h2>
            <div className="wrapper">
                <div className="staticText">I'm</div>
                <div className="dynamicText">
                    <li><span>Jongleur</span></li>
                    <li><span>Danseur</span></li>
                    <li><span>Dessinateur</span></li>
                    <li><span>Developeures foul steack saignant</span></li>
                </div>
            </div>
            <div className="aboutBlocText">
                <p>Anciennement Responsable Logistique, j'ai décidé de vivre de ma <span>passion</span> du code en passant par l'apprentissage <span>autodidacte</span> avec <span>FreeCodeCamp</span> et <span>OpenClassRoom</span> suivi d'une formation développeur <span>Javascript</span> à la <span>Wild Code School</span>.</p>
            </div>
            <div className="aboutBlocImg">
            
            </div>
        </div>
    )
}

export default About