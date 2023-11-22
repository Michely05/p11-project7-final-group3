import Header from '../../components/Header/Header';
import Calendar from '../../components/Calendar/Calendar';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import './MainPage.css';

export default function SelectionPage(){
    return (

        <div className="selectionPage">
            <Header />
            <Calendar />
            <ProgressBar />
        </div>

    )
}