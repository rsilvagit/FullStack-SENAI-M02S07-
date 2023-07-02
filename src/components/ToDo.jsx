import { useState } from "react"
export default function ToDo({ tarefas }) {
  const [tarefasConcluidas, setTarefasConcluidas] = useState([])

  const handleClick = (tarefa) => {
    if (tarefasConcluidas.includes(tarefa)) {
      setTarefasConcluidas(tarefasConcluidas.filter(item => item !== tarefa))
    } else {
      setTarefasConcluidas([...tarefasConcluidas, tarefa])
    }
  }

  const isTarefaConcluida = (tarefa) => {
    return tarefasConcluidas.includes(tarefa)
  }

  return (
    <div>
      <ul className="list-group mt-3">
        {tarefas.map(item => {
          return (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={item}>
              {item}
              <button
                onClick={() => handleClick(item)}
                type="button"
                className={`btn btn-primary btn-sm ${isTarefaConcluida(item) ? 'btn-concluido' : ''}`}
              >
                {isTarefaConcluida(item) ? 'Concluído' : 'Pendente'}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

