import Header from "../../components/Header";
import UserOptions from "../../components/UserOptions";
import Modal from "../../components/Modal";
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