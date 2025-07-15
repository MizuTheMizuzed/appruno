
import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export function TaskProvider ({ children }:any){

    const [localTasks, setLocalTasks] = useState([]);

    const addTask = ({title, description, id}) => {
        setLocalTasks ((prev) => [
            ...prev,
            {id: id || `local-${Date.now()}`, title, description: description || '', completed: false},
        ]);
    };

    const toggleTaskCompletion = (id) => {
        setLocalTasks ((prev)) =>
            prev.map((task)) => 
                TaskContext.id === id ? {...TaskContext, completed: !TaskContext.completed} : task
    
    }
    
}
