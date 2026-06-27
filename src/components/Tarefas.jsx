import {
	Circle,
	CircleCheck,
	HeartMinus,
	HeartPlus,
	Star,
	Trash,
} from "lucide-react"
import { useEffect, useState } from "react"
import * as servicoTarefa from "../services/tarefas.service"

export function Tarefas() {
	const [Tarefas, setTarefas] = useState([])

	useEffect(() => {
		const todas = servicoTarefa.pegarTarefas()
		setTarefas(todas)
	}, [])

	return (
		<>
			<ol className="flex flex-col gap-2">
				{Tarefas.map(tarefa => {
					return (
						<div className="bg-indigo-800 rounded-2xl py-2 px-4 flex gap-3 items-center justify-between hover:bg-indigo-700 transition-colors duration-300 ease-linear cursor-pointer">
							<span
								onClick={() => {
									servicoTarefa.inverterCompleto(tarefa.id, setTarefas)
								}}
								className="flex gap-x-3 items-center w-full h-full"
							>
								<span>
									{tarefa.completa ? (
										<CircleCheck size={20} />
									) : (
										<Circle size={20} />
									)}
								</span>
								<li
									key={tarefa.id}
									className={tarefa.completa ? "line-through" : "no-underline"}
								>
									{tarefa.titulo}
								</li>
							</span>
							<span className="flex gap-x-2">
								<i
									className="hover:bg-red-900 rounded-3xl p-2 transition-colors duration-300 ease-initial"
									onClick={() => {
										servicoTarefa.deletarTarefa(tarefa.id, setTarefas)
									}}
								>
									<Trash size={20} />
								</i>
								<i
									className="hover:bg-indigo-950 rounded-3xl p-2 transition-colors duration-300 ease-initial"
									onClick={() => {
										servicoTarefa.inverterFavorita(tarefa.id, setTarefas)
									}}
								>
									{tarefa.favorita ? (
										<HeartMinus size={20} />
									) : (
										<HeartPlus size={20} />
									)}
								</i>
							</span>
						</div>
					)
				})}
			</ol>
		</>
	)
}
