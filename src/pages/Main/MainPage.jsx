import Header from "../../components/Header/Header";
import Calendar from "../../components/Calendar/Calendar";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import "./MainPage.css";
import PlusButton from "../../components/PlusButton/PlusButton";
import HouseButton from "../../components/HouseButton/HouseButton";

export default function MainPage({ habits }) {
  return (
    <div className="mainPage">
      <Header />
      <HouseButton />
      <Calendar />
      <ProgressBar habits={habits} />
      <PlusButton />
    </div>
  );
}
