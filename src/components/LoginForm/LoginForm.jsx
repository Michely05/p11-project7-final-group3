import "./LoginForm.css";
import logo from "../../assets/img/habbitologo.png";
import {useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";



export default function LoginForm(){
    const navigate = useNavigate();
    const localStorage = window.localStorage;
    const [isLogged, setIsLogged] = useState(false);

    useEffect(( ) => {
        validateUser();
        if(isLogged){
          navigate('/selection');
        }
      }, []);
      useEffect(() => {
        if(isLogged){
          navigate('/selection');
        }
      }, [isLogged]);



      function hanldeLogin(e){
        e.preventDefault();
    
        const inputEmail = document.querySelector('#welcome-form #email');
        const inputPassword = document.querySelector('#welcome-form input[type="password"]');
    
        const userLogin = {
          email: inputEmail.value,
          password: inputPassword.value
        }
    
        const usuarioAdmin = adminUsers.find((user) => {
          return userLogin.email === user.email && userLogin.password === user.password;
        });
    
        if(usuarioAdmin){
          localStorage.setItem('user', JSON.stringify(usuarioAdmin));
          validateUser();
        } else{
          validateUser();
          showAlertMessage('El usuario/constraseña no es correcto.', e.target);
        }
    } 

    function validateUser(){

        if(JSON.parse(localStorage.getItem('user'))){
          setIsLogged(true);
        } else{
          setIsLogged(false);
        }
      }
    

    return(
        <section className="loginContainer">
            <form className="welcomeForm" onSubmit={hanldeLogin}>
                <img className="rabbitoLogo" src={logo} alt="rabitto logo" />

                <label htmlFor="email"></label>
                <input type="email" className="emailInput" id="email" placeholder="correo electrónico"/>

                <label htmlFor="password"></label>
                <input type="password" className="passwordInput" id="password" placeholder="contraseña" />

                <p className="textParraf">¿Has olvidado tu contraseña? Puedes cambiarla  <a className="linkAccount" href="#" >aquí</a></p>
                 <button type="submit" className="loginBtn" onClick={() => navigate('/main')}>Iniciar sesión</button>
                
                <div className="separator">
                 <hr />
                 <p className="letterO">O</p>
                 <hr />
                 </div>
                 
                 <button type="submit" className="registerBtn" onClick={() => navigate('/register')}>Registrarse</button>


            </form>
        </section>
       
    )
} 