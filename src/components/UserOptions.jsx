import React, { useState, useEffect} from 'react';
import { HabitsApi } from '../API/HabitsApi';
import './UserOptions.css';
import Checkbox from './Checkbox';
import AddButton from './AddButton';

const UserOptions = () => {
    const [habits, setHabits] = useState([]);
    const [checkedHabits, setCheckedHabits] = useState([]);

    const handleCheckboxChange = (habitId) => {
        const newCheckedHabits = [...checkedHabits];
    
        if (newCheckedHabits.includes(habitId)) {
          newCheckedHabits.splice(newCheckedHabits.indexOf(habitId), 1);
        } else {
          newCheckedHabits.push(habitId);
        }
    
        setCheckedHabits(newCheckedHabits);
      };
      
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await(new HabitsApi()).provideHabits();
                if (response.ok) {
                    const data = await response.json();
                    setHabits(data);
                } else {
                    console.log("Ha ocurrido un error :(")
                }
            } catch (error) {
                console.log ("Ha ocurrido un error :(", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='overallHabits'>
          {habits.map((habit, index) => (
            <div className="habitContainers" key={index}>
                <div className={`categoryColor ${habit.category.replace(/\s/g, '')}`}></div>
                <p id={"habit-"+ index} key={index}>
                    {habit.name}
                </p>
                {/* <Checkbox
            checked={checkedHabits.includes(habit.id)}
            onChange={() => handleCheckboxChange(habit.id)}/> */}
            </div>
          ))}
          <AddButton />
        </div>
      );
};

export default UserOptions;