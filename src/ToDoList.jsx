import React, { useState } from 'react'



function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
  return (
    <div>
         
      
    </div>
  )
}}

export default ToDoList
