import "./styles/Nav.css"

const Nav = () => {

    return (
        <div id='nav'>
          <ul className='navList'>
            <li data-menuanchor="page1" className="active">
                <a href="#page1">
                    À propos
                </a>
            </li>
            <li data-menuanchor="page2" className="active">
                <a href="#page2">
                    Compétences
                </a>
            </li>
            <li data-menuanchor="page3" className="active">
                <a href="#page3">
                    Expériences
                </a>
            </li>
            <li data-menuanchor="page3" className="active">
                <a href="#page3">
                    Contacts
                </a>
            </li>
            <li data-menuanchor="page3" className="active">
                <a href="#page3">
                    CV
                </a>
            </li>
          </ul>
        </div>
    )
}

export default Nav