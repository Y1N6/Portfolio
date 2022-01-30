import "./styles/ContactLogo.css"

const ContactLogo = () => {
    return(
        <div className="contactLogos">
            <div className="contactLogo">
            <a href="https://www.linkedin.com/in/yannick-lanteri/" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin fa-3x"></i>
            <p>LinkedIn</p>
            </a>
            </div>
            <div className="contactLogo">
            <a href="https://github.com/Y1N6" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github fa-3x"></i>
            <p>Github</p>
            </a>
            </div>
        </div>
    )
}

export default ContactLogo