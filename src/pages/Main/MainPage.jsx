import Header from '../../components/Header/Header';
import Calendar from '../../components/Calendar/Calendar';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import './MainPage.css';
import NextButton from '../../components/Nextbutton/NextButton';

export default function SelectionPage(){
    return (

        <div className="selectionPage">
            <Header />
            <Calendar />
            <ProgressBar />
            <NextButton/>
        </div>

    )
}