export default function ToDo({ tarefas }) {
  return (
    <div>
      <ul className="list-group mt-3">
        {tarefas.map(item => {
          return <li className="list-group-item d-flex justify-content-between align-items-center" key={item}>{item}<button type='button' className="btn btn-primary btn-sm">Pendente</button></li>
        })}
      </ul>
    </div>
  )
}

