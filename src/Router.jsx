import "react";
import { Routes, Route } from 'react-router-dom';
import MainPage from '../src/pages/Main/MainPage';
import SelectionPage from '../src/pages/Selection/SelectionPage';
import { HabitsApi } from "./API/HabitsApi";
import { useState, useEffect } from "react";


export function Router() {

    const onSelectedHabit = (id) => {
        let updatedHabits = habits
            .map(h => {
                if (h.id === id) {
                    return { ...h, selected: !h.selected }
                }
                return h
            })
        setHabits(updatedHabits);
    };

    const [habits, setHabits] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await (new HabitsApi()).provideHabits();
                if (response.ok) {
                    let data = (await response.json());
                    data = data.map((habit) => { return { ...habit, selected: false } })
                    setHabits(data);
                } else {
                    console.log("Ha ocurrido un error :(")
                }
            } catch (error) {
                console.log("Ha ocurrido un error :(", error);
            }
        };
        fetchData();
    }, []);


    return (
        <Routes>
            <Route path="/" element={<MainPage habits={habits.filter(habit => habit.selected)} />} />
            <Route path="/selection" element={<SelectionPage habits={habits}
                onSelectedHabit={onSelectedHabit} />} />
        </Routes>
    );
}