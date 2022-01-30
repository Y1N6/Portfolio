import "./styles/Nav.css"

import CV from '../assets/YannickLanteriCV.pdf'

const Nav = () => {

  return (
    <div id='nav'>
      <ul className='navList'>
        <li data-menuanchor="About" className="active">
          <a href="#About">
            À propos
          </a>
        </li>
        <li data-menuanchor="Skills" className="active">
          <a href="#Skills">
            Compétences
                </a>
            </li>
            <li data-menuanchor="Experience1" className="active">
                <a href="#Experience1">
                    Expériences
                </a>
            </li>
            <li data-menuanchor="Contact" className="active">
                <a href="#Contact">
                    Contact
                </a>
            </li>
            <li data-menuanchor="CV" className="active">
                <a href={CV} target="_blank" rel="noopener noreferrer">
                    CV
                </a>
            </li>
          </ul>
        </div>
    )
}

export default Nav