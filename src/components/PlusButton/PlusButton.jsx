import "./PlusButton.css";
import { Link } from "react-router-dom";
import plusbutton from "../../assets/img/plus.svg";

function PlusButton () {
    return (
        <div className="headerBackground">
             <Link to={"/selection"}>
              <img src={plusbutton} alt="Selection Icon" className="icon" />
                
             </Link>
             
        </div>
    );
}

export default PlusButton;