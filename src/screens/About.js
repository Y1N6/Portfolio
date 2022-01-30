import './styles/About.css'


const About = () => {
    return (
        <div className="about">
            <img src="https://i.ibb.co/BCbmTzX/title-Yannick-Lanteri.png" alt="Yannick Lanteri" className="titleYannickLanteri"></img>
            <h2>Developpeur Web et Mobile</h2>
            <div className="aboutBloc">
                <div className="aboutBlocText">
                    <p>Anciennement Responsable Logistique, j'ai décidé de vivre de ma <span>passion</span> du code en passant par l'apprentissage <span>autodidacte</span> avec <span>FreeCodeCamp</span> et <span>OpenClassRoom</span> suivi d'une formation développeur <span>Javascript</span> à la <span>Wild Code School</span>.</p>
                </div>
                <div className="aboutBlocImg">

                    {/* <img src="https://i.ibb.co/mHfn2hz/profil-User.png" alt="Profil User Ninja Y1N" className="profilUser"></img> */}
                </div>
            </div>
        </div>
    )
}

export default About