import { BookCheck, Heart, NotebookPen } from "lucide-react"
import { LinkSideBar } from "./LinkSideBar"

export function Sidebar() {
	return (
		<>
			<aside className="bg-zinc-900 w-full md:w-fit px-6 py-6 text-white flex items-center md:rounded-2xl h-11/12">
				<nav className="flex flex-row justify-around w-full md:flex-col md:justify-center md:gap-y-12">
					<LinkSideBar icon={<NotebookPen />} rota="/" />
					<LinkSideBar icon={<BookCheck />} rota="/completas" />
					<LinkSideBar icon={<Heart />} rota="/favoritas" />
				</nav>
			</aside>
		</>
	)
}
