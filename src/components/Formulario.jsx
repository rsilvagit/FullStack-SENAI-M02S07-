import { useState } from "react"
import Task from "../pages/Task/Task";

export default function Formulario({handleSubmit}){
  const [form, setForm] = useState()
  const criarTarefa = (event) => {
    event.preventDefault()
    handleSubmit(form)
  }

    const handleChange = (event) => {
      setForm(event.target.value)
    }
    return(
        <form onSubmit={criarTarefa}>
            <input placeholder="Digite uma nova tarefa" type="text" value={form} onChange={handleChange} className="form-control"/>
            <button type="submit" className="btn btn-primary btn-sm">Criar Tarefa</button>
        </form>
    )
}


