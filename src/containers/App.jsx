import { useState, useEffect } from "react";
import { List } from "./List";
import { Searchbar } from "../components/Searchbar";
import { Slidebar } from "../components/Slidebar";
import { RadioInput } from "../components/RadioInput";

export function App() {
	const [list, setList] = useState([]);

	useEffect(() => {
		fetch("https://random-persons.herokuapp.com/users")
			.then(response => response.json())
			.then(data => setList(data.data))

	}, [])

	return (
		<div className="sidebar">
			<div className="sidebar-search">
				<Searchbar info={list} />
			</div>
			<div>
				<h4>Filtrar</h4>
				<RadioInput info={list} />
			</div>
			<div>
				<Slidebar info={list} />
			</div>
		</div>
	)
}
