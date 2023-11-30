import { Link } from "react-router-dom";
import "./HouseButton.css";
import houseicon from "../../assets/img/house.svg";

function HouseButton() {
  return (
    <div className="houseContainer">
      <Link to={"/userprofile"}>
        <img src={houseicon} alt="Main Icon" className="houseIcon" />
      </Link>
    </div>
  );
}
export default HouseButton;
