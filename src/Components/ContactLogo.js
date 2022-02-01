import "./styles/ContactLogo.css"

const ContactLogo = () => {
    return(
        <>
        <div className="eyes"></div>
        <div className="eyes2"></div>
        <div className="linkedIn">
            <div className="contactLogo">
            <a href="https://www.linkedin.com/in/yannick-lanteri/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-3x"></i>
            <p>LinkedIn</p>
            </a>
            </div>
        </div>
        <div className="gitHub"> 
            <div className="contactLogo">
            <a href="https://github.com/Y1N6" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-3x"></i>
            <p>Github</p>
            </a>
            </div>
        </div>
        </>
    )
}

export default ContactLogo