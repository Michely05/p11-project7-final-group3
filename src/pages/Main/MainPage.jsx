import Header from '../../components/Header/Header';
import Calendar from '../../components/Calendar/Calendar';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import './MainPage.css';
import PlusButton from "../../components/PlusButton/PlusButton"

export default function MainPage({habits}){
    return (

        <div className="selectionPage">
            <Header /> 
            <Calendar />
            <ProgressBar habits={habits}/>
            <PlusButton/>
        </div>

    )
}