import "./styles/Nav.css"

import CV from '../assets/YannickLanteriCV.pdf'

import { useEffect, useState } from "react"

const Nav = () => {

  // Changer la couleur du titre dans le menu

  const [hash, setHash] = useState(window.location.hash)

  window.addEventListener("hashchange", () =>setHash(window.location.hash.substring(1)))
   useEffect(() => {
    console.log(hash)
    if (hash === 'About') {
      document.querySelector('#About').style.color = 'var(--secondColor)';
      document.querySelector('#Skills').style.color = 'var(--firstColor)';
      document.querySelector('#Experience1').style.color = 'var(--firstColor)';
      document.querySelector('#Contact').style.color = 'var(--firstColor)';
    } else if (hash === 'Skills')
    {
      document.querySelector('#About').style.color = 'var(--firstColor)';
      document.querySelector('#Skills').style.color = 'var(--secondColor)';
      document.querySelector('#Experience1').style.color = 'var(--firstColor)';
      document.querySelector('#Contact').style.color = 'var(--firstColor)';
    } else if (hash === "Experience1") {
      document.querySelector('#About').style.color = 'var(--firstColor)';
      document.querySelector('#Skills').style.color = 'var(--firstColor)';
      document.querySelector('#Experience1').style.color = 'var(--secondColor)';
      document.querySelector('#Contact').style.color = 'var(--firstColor)';
    } else if (hash === 'Contact')
    {
      document.querySelector('#About').style.color = 'var(--firstColor)';
      document.querySelector('#Skills').style.color = 'var(--firstColor)';
      document.querySelector('#Experience1').style.color = 'var(--firstColor)';
      document.querySelector('#Contact').style.color = 'var(--secondColor)';
    }
    }, [hash])

  
  return (
    <div className='nav' >
      <ul className='navList' id="myMenu">
        <li data-menuanchor="About" >
          <a href="#About" id="About">
            À propos
          </a>
        </li>
        <li data-menuanchor="Skills" >
          <a href="#Skills" id="Skills">
            Compétences
                </a>
            </li>
            <li data-menuanchor="Experience1" >
                <a href="#Experience1" id="Experience1">
                    Expériences
                </a>
            </li>
            <li data-menuanchor="Contact" >
                <a href="#Contact" id="Contact"> 
                    Contact
                </a>
            </li>
            <li data-menuanchor="CV">
                <a href={CV} target="_blank" rel="noopener noreferrer">
                    CV
                </a>
            </li>
          </ul>
        </div>
    )
}

export default Nav