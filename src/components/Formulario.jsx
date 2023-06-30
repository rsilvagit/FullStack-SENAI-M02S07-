import { useState,useEffect } from "react"
import Task from "../pages/Task/Task";

export default function Formulario({tarefas}){
    const [taskName, setTaskName] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        document.title = `Total de tarefas: ${tarefas.length}`;
      }, [tasks]);
      const handleSubmit = (e) => {
        e.preventDefault();
        setTasks((prevTasks) => [...prevTasks, { name: taskName, isCompleted }]);
        setTaskName("");
      };
      
    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="Digite uma nova tarefa" type="text" value={taskName} onChange={(e)=>setTaskName(e.target.value)}
            />
            <button type="submit">Criar Tarefa</button>
        </form>
    )
}