/* V. Fetch API
** V. Set 2 lists (Original and Sliced)
** V. Set slice function
** V. Map sliced list
** 5. Set pagination button
** 6. Implement functionality to button
** 7. Set searchbar
** 8. Implement functionality to searchbar
** 9. Set sort by column
** 10. Implement functionality to sort
** 11. Style componentes
** 12. Style list
** 13. Style page
*/

import { useEffect, useState } from "react"
import Button from "../components/Button";
import '../styles/global.css'


const List = () => {
	const [originalList, setOriginalList] = useState([]);
	const [slicedList, setSlicedList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [itensPerPage, setItensPerPage] = useState(50);

	const fetchApi = () => {
		fetch("https://random-persons.herokuapp.com/users")
			.then(res => res.json())
			.then(data => {
				setOriginalList(data.data)
				setSlicedList(sliceList(data.data))
			})
	}

	useEffect(() => {
		fetchApi();
	}, [])

	const sliceList = (list) => {
		const indexLastItem = currentPage * itensPerPage;
		const indexFirstItem = indexLastItem - itensPerPage;
		const currentItems = list.slice(indexFirstItem, indexLastItem);
		return currentItems;
	}

	// ===> Paginate the page <===
	const previousPage = () => {
		setCurrentPage(currentPage - 1);
	}

	const nextPage = () => {
		setCurrentPage(currentPage + 1);
	}

	useEffect(() => {
		const previousButton = document.querySelector(".previous");

		if (currentPage <= 1) {
			previousButton.classList.add("hidden");
		} else {
			previousButton.classList.remove("hidden");
		}
		setSlicedList(sliceList(originalList));
	}, [currentPage])
	// <===>

	return (
		<div>
			<h2>Lista de Usuários</h2>
			<table>
				<thead>
					<tr>
						<th>Nome</th>
						<th>Idade</th>
					</tr>
				</thead>
				<tbody>
					{
						slicedList.map((item, index) =>
							(
								<tr key={index}>
								<td>{item.name}</td>
								<td>{item.age}</td>
								</tr>
							)
						)
					}
				</tbody>
			</table>
			<Button className="previous hidden" paginate={previousPage}>Anterior</Button>
			<Button paginate={nextPage}>Próximo</Button>
		</div>
	)
}

export default List;