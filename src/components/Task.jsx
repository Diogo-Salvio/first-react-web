import React from "react";
import {CgInfo} from 'react-icons/cg'

import './Task.css';

const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
    return (
        <div className="task-container" style={task.completed ? {borderLeft: '6px solid #F7235F'} : {}}>
           
           <div className="task-title" onClick={() => handleTaskClick(task.id)}>

            {task.title}
           
           </div>

            <div className="buttons-container">
           
            <button 
                className="see-task-details-button" 
                ><CgInfo />
                </button>
                
                <button 
                className="remove-task-button" 
                onClick={() => handleTaskDeletion(task.id)}>x
                </button>
            
            </div>
            

        </div>
    );



};


export default Task;