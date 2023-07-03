import { useState,useRef } from "react"
import Task from "../pages/Task/Task";

export default function Formulario({handleSubmit}){
  const [form, setForm] = useState();
  const [error, setError]= useState();
  const inputRef = useRef(null);

  const criarTarefa = (event) => {
    event.preventDefault();
    form.trim() === "" ? (setError("O campo não pode ser vazio"), inputRef.current.focus()): null;

    handleSubmit(form);
    setForm("");
    setError("");
  };

    const handleChange = (event) => {
      setForm(event.target.value)
      setError("");
    };

    return(
        <form onSubmit={criarTarefa}>
            <input placeholder="Digite uma nova tarefa" type="text" value={form} onChange={handleChange} ref={inputRef} className="form-control"/>
            {error&&<div className="error">{error}</div>}
            <button type="submit" className="btn btn-primary btn-sm">Criar Tarefa</button>
        </form>
    )
}


