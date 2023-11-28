import { Link } from "react-router-dom";
import "./ArrowButton.css";
import arrowbutton from "../../assets/img/backArrow.png";
function ArrowButton() {
    return (
        <div className="arrowBtnContainer">
<<<<<<< HEAD
             <Link to={"/"}>
=======
             <Link to={"/main"}>
>>>>>>> 973aafb49bdae13a85f447575f48504494d42d10
             <img src={arrowbutton} alt="Main Icon" className="icon" /></Link>
        </div>
    );
}
export default ArrowButton;