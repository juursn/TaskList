import { Children } from "react"
import { NavLink } from "react-router-dom"

export function LinkSideBar({ icon, rota }) {
	return (
		<>
			<NavLink
				to={rota}
				className={({ isActive }) =>
					`hover:scale-110 transition-all duration-300 ease-in-out 
   			${
					isActive
						? "text-white bg-indigo-700 rounded-full p-3"
						: "text-zinc-500 p-3 border-transparent"
				}`
				}
			>
				{icon}
			</NavLink>
		</>
	)
}
