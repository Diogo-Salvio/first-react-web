import React from "react";

import './Task.css';

const Task = ({task, handleTaskClick}) => {
    return (
        <div className="task-container" style={task.completed ? {borderLeft: '6px solid #F7235F'} : {}}>
           
           <div className="task-title" onClick={() => handleTaskClick(task.id)}>

            {task.title}
           
           </div>

            <div className="buttons-container">
                <button className="remove-task-button">x</button>
            </div>

        </div>
    );



};


export default Task;