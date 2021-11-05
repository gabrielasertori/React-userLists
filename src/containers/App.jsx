import { useState, useEffect } from "react";
import { List } from "./List";

export function App() {
	const [list, setList] = useState([]);

	useEffect(() => {
		fetch("https://random-persons.herokuapp.com/users")
			.then(response => response.json())
			.then(data => setList(data.data))
	}, [])

	return (
		<div className="sidebar">
			<List list={list} />
		</div>
	)
}
