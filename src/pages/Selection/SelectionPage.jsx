import Header from "../../components/Header/Header";
import UserOptions from "../../components/UserOptions/UserOptions";
import Modal from "../../components/Modal/Modal";
import './SelectionPage.css';

export default function SelectionPage(){
    return (
        <div className="selectionPage">
            <Header />
            <UserOptions />
            <Modal />
        </div>
    )
}