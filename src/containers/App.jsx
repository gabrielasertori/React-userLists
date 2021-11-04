import { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";

export function App() {
	const [list, setList] = useState([]);

	useEffect(() => {fetch("https://random-persons.herokuapp.com/users")
	.then(response => response.json())
	.then(data => setList(data.data))}, [])

	console.log(list);
	return (
		<Sidebar />
	)
}
