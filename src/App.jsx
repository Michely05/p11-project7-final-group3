import './App.css';
import Header from './components/Header';
import Calendar from './components/Calendar.jsx';
import UserOptions from './components/UserOptions.jsx';
import { useState } from "react";
// import ProgressBar from "./components/ProgressBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />   
      <Calendar />
      {/* <ProgressBar /> */}
      <UserOptions />    
    </div>
  );
}

export default App;
