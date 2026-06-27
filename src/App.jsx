import "./index.css"
import { Sidebar } from "./components/SideBar"
import { Tarefas } from "./components/Tarefas"
import { TarefasForm } from "./components/TarefasForm"
import { Routes, Route } from "react-router-dom"
import { Completas } from "./components/Completas"
import { Favoritas } from "./components/Favoritas"

function App() {
	return (
		<>
			<main className="min-h-screen grid bg-linear-to-bl from-slate-900 via-indigo-900 to-blue-800 grid-cols-1 grid-rows-[auto_1fr] md:grid-cols-[auto_1fr] md:grid-rows-1">
				<div className="flex items-center md:ml-4">
					<Sidebar />
				</div>

				<section className="flex flex-1 items-center justify-center">
					<div className=" w-full md:w-10/12  bg-zinc-900/80 flex flex-col items-center md:rounded-2xl md:border-2 border-slate-700 h-screen overflow-hidden">
						<h1 className="font-bold text-4xl text-white my-12">
							Lista de Tarefas
						</h1>
						<div className="bg-zinc-950 p-6 rounded-3xl w-11/12  md:w-7/12">
							<TarefasForm />
						</div>
						<div className=" bg-zinc-950 p-6 rounded-3xl w-11/12 md:w-7/12 text-white overflow-y-auto scrollbar-track-indigo-900 flex-1 my-4">
							<Routes>
								<Route path="/" element={<Tarefas />}></Route>
								<Route path="/completas" element={<Completas />}></Route>
								<Route path="/favoritas" element={<Favoritas />}></Route>
							</Routes>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

export default App
