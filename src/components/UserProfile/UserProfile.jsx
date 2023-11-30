import { useNavigate } from "react-router-dom";
import "./UserProfile.css";
import bunny from "../../assets/img/circle.png";

const UserProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="user-profile">
      <div className="profile-details">
        <img src={bunny} alt="Profile Image" className="profilePhoto" />
        <button className="uploadPhoto">Subir foto</button>
        <br />
        <div className="userInformation">
          <h3 className="titles">Nombre</h3>
          <p className="user">Matheus</p>
          <h3 className="titles">Apellidos</h3>
          <p>Ribeiro</p>
          <h3 className="titles">Email</h3>
          <p>Email: mat.rib.lima@gmail.com</p>
          <h3 className="titles">Contraseña</h3>
          <p>********</p>
        </div>

        <button
          type="submit"
          className="underButtons"
          onClick={() => navigate("/")}
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
