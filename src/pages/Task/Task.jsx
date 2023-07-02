import ToDo from "../../components/ToDo"
import Formulario from "../../components/Formulario"
import { useState } from "react"

export default function Task() {
    // const tarefas = [
    const [tarefas, setTarefas] = useState(
        [
            "Ir ao Mercado",
            "Lavar o Carro",
            "Estudar React",
            "Jantar",
        ]
    )


    const novaTarefaCriada = (novaTarefa) => {
        console.log(`${novaTarefa} foi criada.`)
        setTarefas([...tarefas, novaTarefa])
    }
    return (
        <>

            <h2>Tarefas</h2>
            <Formulario handleSubmit={novaTarefaCriada} />
            <ToDo tarefas={tarefas} />

        </>
    )
}