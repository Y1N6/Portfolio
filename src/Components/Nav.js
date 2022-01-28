import "./styles/Nav.css";

import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <p>Page Nav</p>
            <Link to="/About">A propos</Link>
            <Link to="/Skills">Compétences</Link>
            <Link to="/Experience">Experience</Link>
        </div>
    )
}

export default Nav