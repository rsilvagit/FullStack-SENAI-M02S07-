import React from 'react'
import ToDo from './components/ToDo'

export default function App() {
  const tasks = ['Reunião Condominio Jardim Zona Sul', 'Vistoria Condominio Nonoai', 'Vistoria Condominio Petropólis','Vistoria Canoas'];
  return (
    <div>
      <h1 className='text-center mt-5'>Lista de Tarefas</h1>
      <ToDo tasks={tasks}/>
    </div>
    
  )
}

 
