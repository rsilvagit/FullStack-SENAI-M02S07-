import ToDo from "../../components/ToDo"
import Formulario from "../../components/Formulario"
import { useEffect, useState } from "react"


export default function Task() {
    const [tarefas, setTarefas] = useState([
      "Ir ao Mercado",
      "Lavar o Carro",
      "Estudar React",
      "Jantar",
    ]);
  
    const novaTarefaCriada = (novaTarefa) => {
      console.log(`${novaTarefa} foi criada.`);
      setTarefas([...tarefas, novaTarefa]);
    };
  
    const limparListaConcluida = () => {
      const tarefasPendentes = tarefas.filter((tarefa) => !tarefasConcluidas.includes(tarefa));
      setTarefas(tarefasPendentes);
      setTarefasConcluidas([]);
    };
  
    useEffect(() => {
      document.title = `Total de tarefas: ${tarefas.length}`;
      return () => {
        document.title = 'Lista de Tarefas';
      };
    }, [tarefas]);
  
    return (
      <>
        <h2>Tarefas</h2>
        <Formulario handleSubmit={novaTarefaCriada} limparListaConcluida={limparListaConcluida} />
        <ToDo tarefas={tarefas} />
      </>
    );
  }