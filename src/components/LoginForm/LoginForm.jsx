import "./LoginForm.css";
import logo from "../../assets/img/rabbitologo.png";

export default function LoginForm(){
    return(
        <section className="loginContainer">
            <form className="welcomeForm">
                <img className="rabbitoLogo" src={logo} alt="rabitto logo" />
                <hr />

                <label htmlFor="email"></label>
                <input type="email" className="emailInput" id="email" placeholder="tu mejor email"/>

                <label htmlFor="password"></label>
                <input type="password" className="passwordInput" id="password" placeholder="contraseña" />

                <p className="textParraf">¿No tienes una cuenta? Puedes crearla <a className="linkAccount" href="#">aqui</a></p>
                 <button type="submit" className="loguinBtn">Iniciar Sessión</button>
            </form>
        </section>
       
    )
}