import React, { useState, useEffect } from 'react';
import { HabitsApi } from '../../API/HabitsApi';
import './UserOptions.css';

const UserOptions = ({habits}) => {
    const [checkedHabits, setCheckedHabits] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCheckboxChange = (habitId) => {
        const newCheckedHabits = [...checkedHabits];
    
        if (newCheckedHabits.includes(habitId)) {
          newCheckedHabits.splice(newCheckedHabits.indexOf(habitId), 1);
        } else {
          newCheckedHabits.push(habitId);
        }
    
        setCheckedHabits(newCheckedHabits);
    };

    

    const handleAddHabit = (newHabit) => {
        setHabits([newHabit, ...habits]);
        setIsModalOpen(false);
    };
    

    return (
        <div className='overallHabits'>
          {habits.map((habit, index) => (
            <div className="habitContainers" key={index}>
                <div className={`categoryColor ${habit.category}`}></div>
                <p id={"habit-"+ index} key={index}>
                    {habit.name}
                </p>
                {/* <Checkbox
            checked={checkedHabits.includes(habit.id)}
            onChange={() => handleCheckboxChange(habit.id)}/> */}
            </div>
          ))}
          {/* <AddButton onClick={handleAddClick} />
          {isModalOpen && <AddModal onAdd={handleAddHabit} />} */}
        </div>
      );
};

export default UserOptions;