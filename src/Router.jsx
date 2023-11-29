import "react";
import { HabitsApi } from "./API/HabitsApi";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import SelectionPage from "./pages/Selection/SelectionPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";


export function Router() {
  const onSelectedHabit = (id) => {
    let updatedHabits = habits.map((h) => {
      if (h.id === id) {
        return { ...h, selected: !h.selected };
      }
      return h;
    });
    setHabits(updatedHabits);
  };

  const onAddedHabit = async (name) => {
    //1 enviar el nuevo habito al servidor 
    let api = new HabitsApi();
    let habit = await api.createHabit(name) .then((response) => response.json())
    //2 actualizar la lista de habitos del nuevo state 
    setHabits([ ...habits, { ...habit, selected: false }]);
  }

  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await new HabitsApi().provideHabits();
        if (response.ok) {
          let data = await response.json();
          data = data.map((habit) => {
            return { ...habit, selected: false };
          });
          setHabits(data);
        } else {
          console.log("Ha ocurrido un error :(");
        }
      } catch (error) {
        console.log("Ha ocurrido un error :(", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/main"
        element={<MainPage habits={habits.filter((habit) => habit.selected)} />}
      />
      <Route
        path="/selection"
        element={
          <SelectionPage habits={habits} onSelectedHabit={onSelectedHabit} onAddedHabit={onAddedHabit}/>
        }
      />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
