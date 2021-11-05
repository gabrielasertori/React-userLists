import { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { Users } from "../components/Users";

export function App() {
	const [list, setList] = useState([]);

	useEffect(() => {
		fetch("https://random-persons.herokuapp.com/users")
			.then(response => response.json())
			.then(data => setList(data.data))

	}, [])

	const filterFirst = (item, index) => {
		if (index < 20) {
			return item
		}
	}

	return (
		<>
		<Sidebar infos={list}/>
		<ul>
			{list.filter(filterFirst).map((item, index) => {
				return (
					<ul key={index}>
						<li>Nome: {item.name}</li>
						<li>Idade: {item.age}</li>
					</ul>
				)
			})}
		</ul>
		</>
	)
}
