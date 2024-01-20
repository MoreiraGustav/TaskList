import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

interface CardTaskProps {
  textTask: string;
}

export default function CardTask({ textTask }: CardTaskProps) {
  const [concluida, setConcluida] = useState(false);
  const [excluir, setExcluir] = useState(false);

  const ConcluirTarefa = () => {
    setConcluida(!concluida);
  };
  const ExcluirTarefa = () => {
    setExcluir(!excluir);
  };
  return (
    <>
      {excluir ? (
        ""
      ) : (
        <div
          className={`w-full h-16 flex items-center justify-center gap-2 `}
        >
          <div
            className={` bg-gray-500 w-64 sm:w-96 h-12 rounded-md px-2 flex items-center ${
              concluida ? "line-through bg-opacity-75" : ""
            }`}
          >
            <p className={`font-SpaceGrotesk font-medium text-white `}>{textTask}</p>
          </div>
          <div className="flex w-20 h-12 justify-center items-center gap-2 bg-green-500 rounded-md">
            <input
              type="checkbox"
              className="w-4 h-4 cursor-pointer"
              checked={concluida}
              onChange={ConcluirTarefa}
            />
            <p> | </p>
            <p onClick={ExcluirTarefa} className=" cursor-pointer">
              <MdDeleteOutline className="w-5 h-5" />
            </p>
          </div>
        </div>
      )}
    </>
  );
}
