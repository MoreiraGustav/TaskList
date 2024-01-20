"use client";
import { useEffect, useState } from "react";
import CardTask from "../CardTask";

export default function AddTask() {
  const [tarefa, setTarefa] = useState("");
  const [listaDeTarefas, setListaDeTarefas] = useState<any>([]);
  const addTarefa = () => {
    if (tarefa.trim() !== "") {
      setListaDeTarefas([...listaDeTarefas, tarefa]);
      setTarefa("");
    } else {
      alert("Insira um Tarefa");
    }
  };

  
  
  return (
    <>
      <div className="flex w-full h-20 justify-center items-center mt-20 gap-2">
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

      <div className="flex justify-center flex-col items-center  overflow-auto max-h-80">
        <ul>
          {listaDeTarefas.map((tarefa: any, index: any) => (
            <CardTask key={index} textTask={tarefa} />
          ))}
        </ul>
      </div>
    </>
  );
}
