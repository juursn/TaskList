export function pegarTarefas(params) {
	return JSON.parse(localStorage.getItem("tarefas")) || []
}

export function adicionarTarefas(tarefa) {
	const tarefasAntigas = pegarTarefas()
	const todasTarefas = [...tarefasAntigas, tarefa]
	const novaTarefas = JSON.stringify(todasTarefas)
	localStorage.setItem("tarefas", novaTarefas)
}

export function inverterCompleto(id, setTarefas) {
	const tarefasAntigas = pegarTarefas()
	const todasTarefasInvert = tarefasAntigas.map(tarefa => {
		if (tarefa.id === id) {
			tarefa.completa = !tarefa.completa
			return tarefa
		} else {
			return tarefa
		}
	})
	setTarefas(todasTarefasInvert)
	const tarefasAtualizada = JSON.stringify(todasTarefasInvert)
	localStorage.setItem("tarefas", tarefasAtualizada)
}

export function inverterFavorita(id, setTarefas) {
	const tarefasAntigas = pegarTarefas()
	const todasTarefasFavoritas = tarefasAntigas.map(tarefa => {
		if (tarefa.id === id) {
			tarefa.favorita = !tarefa.favorita
			return tarefa
		} else {
			return tarefa
		}
	})
	setTarefas(todasTarefasFavoritas)
	const tarefasAtualizada = JSON.stringify(todasTarefasFavoritas)
	localStorage.setItem("tarefas", tarefasAtualizada)
}

export function deletarTarefa(id, setTarefas) {
	const tarefasAntigas = pegarTarefas()
	const todasTarefasDeletar = tarefasAntigas.filter(tarefa => {
		const condicao = tarefa.id != id
		return condicao
	})
	setTarefas(todasTarefasDeletar)
	const tarefasAtualizada = JSON.stringify(todasTarefasDeletar)
	localStorage.setItem("tarefas", tarefasAtualizada)
}
