import React, { useState } from 'react';
import './UserOptions.css';

const UserOptions = ({ habits, onSelectedHabit }) => {
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
                <div className={habit.selected ? "habitContainers selected" : "habitContainers"} 
                    onClick={() => onSelectedHabit(habit.id)}
                    key={index}>
                    <div className={`categoryColor ${habit.category}`}></div>
                    <p id={"habit-" + index} key={index}>
                        {habit.name}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default UserOptions;