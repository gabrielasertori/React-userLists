/* V. Fetch API
** V. Set 2 lists (Original and Sliced)
** V. Set slice function
** V. Map sliced list
** V. Set pagination button
** V. Implement functionality to button
** V. Set searchbar
** V. Implement functionality to searchbar
** 9. Set sort by column
** 10. Implement functionality to sort
** 11. Style componentes
** 12. Style list
** 13. Style page
*/

import { useEffect, useState } from "react"
import Button from "../components/Button";
import TableCells from "../components/TableCells";
import Searchbar from "./Searchbar";
import '../styles/global.css'


const List = () => {
	const [originalList, setOriginalList] = useState([]);
	const [slicedList, setSlicedList] = useState([]);
	const [searchList, setSearchList] = useState([]);
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

	// ===> Paginate <===
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

		if (searchList.length === 0) {
			setSlicedList(sliceList(originalList));
		} else {
			setSlicedList(sliceList(searchList));
		}
	}, [currentPage])
	// <===>

	// ===> Searchbar <===
	const searchBar = (search) => {
		const searchSwap = [];

		if (search === "") {
			setSearchList(originalList);
		} else {
			originalList.filter(item => {
				if (item.name.toLowerCase().startsWith(search.toLowerCase())
					|| item.age.toString() === search) {
					searchSwap.push(item);
					setSearchList(searchSwap);
				}
			})
		}
	}

	useEffect(() => {
		setSlicedList(sliceList(searchList));
	}, [searchList])
	// <===>

	return (
		<div>
			<h2>Lista de Usuários</h2>
			<Searchbar
				placeholder="Pesquisar..."
				onChange={(e) => searchBar(e.target.value)}
			/>
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Nome</th>
						<th>Idade</th>
					</tr>
				</thead>
				<tbody>
					{slicedList.map((item, index) => {
						return (
							<tr key={index}>
								<TableCells
									index={index}
									name={item.name}
									age={item.age}/>
							</tr>
						)
					})
					}
				</tbody>
			</table>
			<Button
				className="previous hidden"
				paginate={previousPage}>
					Anterior
			</Button>
			<Button
				paginate={nextPage}>
					Próximo
			</Button>
		</div>
	)
}

export default List;