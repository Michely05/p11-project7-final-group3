import { Link } from "react-router-dom";
import "./ArrowButton.css";
import arrowbutton from "../../assets/img/backArrow.png";


function ArrowButton() {
    return (
        <div className="headerBackground">
             <Link to={"/"}>
             <img src={arrowbutton} alt="Main Icon" className="icon" /></Link>
            
        </div>
    );
}

export default ArrowButton;