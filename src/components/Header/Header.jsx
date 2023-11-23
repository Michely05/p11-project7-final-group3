import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <div className="headerBackground">
            <Link to={"/"}>Main</Link>
            <Link to={"/SelectionPage"}>Selection</Link>
            <p className="welcomemessage">¡Bienvenid@!</p>
        </div>
    );
}

export default Header;