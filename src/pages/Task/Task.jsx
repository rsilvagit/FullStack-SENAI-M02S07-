import ToDo from "../../components/ToDo"
import Formulario from "../../components/Formulario"

export default function Task(){
    const tarefas = [
        "Ir ao Mercado",
        "Lavar o Carro",
        "Estudar React",
        "Jantar",
    ]
    return(
        <>
        
        <h2>Tarefas</h2>
        <Formulario tarefas={tarefas}/>
        <ToDo tarefas={tarefas}/>

        </>
    )
}