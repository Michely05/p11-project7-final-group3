import Header from "../../components/Header/Header";
import UserOptions from "../../components/UserOptions/UserOptions";
import Modal from "../../components/Modal/Modal";
import './SelectionPage.css';
import ArrowButton from "../../components/ArrowButton/ArrowButton";


export default function SelectionPage({habits, onSelectedHabit}){
    return (
        <div className="selectionPage">
            <Header />
            <UserOptions habits={habits} onSelectedHabit={onSelectedHabit} />
            <Modal />
            <ArrowButton/>
        </div>
    )
}