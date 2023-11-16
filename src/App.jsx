import './App.css';
import Header from './components/Header';
import Calendar from './components/Calendar.jsx';
import UserOptions from './components/UserOptions.jsx';

function App() {
  return (
    <div>
      <Header />   
      <Calendar />
      <UserOptions />
    </div>
  );
}

export default App;