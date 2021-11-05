import { useState, useEffect } from "react";
import { List } from "./List";
import Pagination from "../components/Pagination";

export function App() {
	const [list, setList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [itensPerPage, setItensPerPage] = useState(50);

	useEffect(() => {
		fetch("https://random-persons.herokuapp.com/users")
			.then(response => response.json())
			.then(data => setList(data.data))
	}, [])

	// Set limit itens to render on page
	const indexOfLastItem = currentPage * itensPerPage;
	const indexOfFirstItem = indexOfLastItem - itensPerPage;
	const currentItens = list.slice(indexOfFirstItem, indexOfLastItem);

	const paginate = (pageNumber) => setCurrentPage(pageNumber)

	return (
		<div className="sidebar">
			<List list={currentItens} />
			<Pagination currentPage={currentPage} paginate={paginate}/>
		</div>
	)
}
