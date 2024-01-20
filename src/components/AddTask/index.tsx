"use client";
import { useState } from "react";
import CardTask from "../CardTask";

export default function AddTask() {
  const [tarefa, setTarefa] = useState("");
  const [listaDeTarefas, setListaDeTarefas] = useState<any>([]);
  const [tarefaCriada, setTarefaCriada] = useState(0);
  const [tarefaConcluida, setTarefaConcluida] = useState(0);

  const addTarefa = () => {
    if (tarefa.trim() !== "") {
      setTarefaCriada(tarefaCriada + 1);
      setListaDeTarefas([...listaDeTarefas, { texto: tarefa, concluida: false }]);
      setTarefa("");
    } else {
      alert("Insira uma Tarefa");
    }
  };

  const AtualizarTarefa = (index:number, concluida: boolean) => {
    setTarefaCriada(tarefaCriada - 1);

    if (concluida) {
      setTarefaConcluida(tarefaConcluida - 1);
    }
  };

  const ContadorTarefaConcluida = (index:number, concluida:boolean) => {
    const novasTarefas = [...listaDeTarefas];
    novasTarefas[index].concluida = !concluida;

    setListaDeTarefas(novasTarefas);

    if (concluida) {
      setTarefaConcluida(tarefaConcluida - 1);
    } else {
      setTarefaConcluida(tarefaConcluida + 1);
    }
  };

  return (
    <>
      <div className="flex w-full h-20 justify-center items-center mt-5 sm:mt-16 gap-2">
        <input
          className=" w-64 sm:w-96 h-10 rounded-md px-2  bg-slate-300 "
          value={tarefa}
          onChange={(event) => setTarefa(event.target.value)}
        />
        <button
          className="bg-green-500 w-20 rounded-md h-10 font-SpaceGrotesk font-medium"
          onClick={addTarefa}
        >
          Add
        </button>
      </div>
      <div className="w-full h-10 flex justify-between px-8 sm:px-96">
        <p className=" font-Kanit">tarefas criadas: {tarefaCriada}</p>
        <p className=" font-Kanit">tarefas concluídas: {tarefaConcluida}</p>
      </div>

      <div className="flex justify-center flex-col items-center  overflow-auto max-h-80">
        <ul>
          {listaDeTarefas.map((tarefa: any , index: number) => (
            <CardTask
              key={index}
              textTask={tarefa.texto}
              concluida={tarefa.concluida}
              onDelete={() => AtualizarTarefa(index, tarefa.concluida)}
              onConcluir={() => ContadorTarefaConcluida(index, tarefa.concluida)}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
