import { Plus } from "lucide-react"
import { useState } from "react"
import * as servicoTarefa from "../services/tarefas.service"

export function TarefasForm() {
	const [Tarefa, setTarefa] = useState({
		id: crypto.randomUUID(),
		titulo: "",
		completa: false,
		favorita: false,
	})
	return (
		<>
			<form
				onSubmit={() => {
					if (Tarefa.titulo != "" || undefined) {
						servicoTarefa.adicionarTarefas(Tarefa)
					} else {
						window.alert("Digite um valor!")
					}
				}}
				className="grid grid-cols-[1fr_auto]"
			>
				<input
					onChange={event => {
						setTarefa({ ...Tarefa, titulo: event.target.value })
					}}
					type="text"
					placeholder="Insira sua tarefa"
					className="bg-zinc-900 text-white py-2 px-4 border border-mist-600 rounded-2xl mx-4"
				/>
				<button className="bg-indigo-600 p-2 rounded-lg border-2 transition duration-300 ease-linear hover:bg-indigo-700 hover:border-indigo-500">
					<Plus color="white" />
				</button>
			</form>
		</>
	)
}
