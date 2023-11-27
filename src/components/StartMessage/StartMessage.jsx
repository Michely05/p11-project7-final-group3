import './StartMessage.css';
import BunnyLogo from '../../assets/img/Bunny.png'


function StartMessage () {
    return (       
        <div className="noHabitsMessage">
            <img src={BunnyLogo} alt="Imagen de un conejo" />
            <p>¡Aún no has añadido ningún hábito! Selecciona “+” para añadir uno.</p>
        </div> );
}
 
export default StartMessage;
