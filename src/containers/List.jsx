import { useEffect, useState } from "react";
import Button from "../components/Button";
import TableCells from "../components/TableCells";
import Searchbar from "../components/Searchbar";
import '../styles/global.css';
import '../styles/buttons.css';
import '../styles/list.css';
import '../styles/searchbar.css';
import '../styles/table.css';


const List = () => {
	const [originalList, setOriginalList] = useState([]);
	const [slicedList, setSlicedList] = useState([]);
	const [searchList, setSearchList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [itensPerPage, setItensPerPage] = useState(50);
	const [columnOrder, setColumnOrder] = useState("");
	const [order, setOrder] = useState(-1);

	useEffect(() => {
		fetch("https://random-persons.herokuapp.com/users")
			.then(res => res.json())
			.then(data => {
				setOriginalList(data.data)
				setSlicedList(sliceList(data.data))
			})
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

		currentPage <= 1 ? previousButton.classList.add("hidden") : previousButton.classList.remove("hidden");

		searchList.length === 0 ?setSlicedList(sliceList(originalList)) : setSlicedList(sliceList(searchList));

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

	// ===> Ordenate <===
	const ordenate = (field) => {
		setOrder(-order);
		setColumnOrder(field);
	}

	const sortList = (list) => {
		return list.sort((a, b) => {
			return a[columnOrder] < b[columnOrder] ? -order : order;
		})
	}

	useEffect(() => {
		setSlicedList(sliceList(sortList(originalList)));
	}, [order])
	// <===>

	return (
		<div className="list">
			<h2 className="page-title">Lista de Usuários</h2>
			<div className="search">
				<label for="searchbar">Pesquisar</label>
				<Searchbar
					id="searchbar"
					className="list__search"
					placeholder="Id, Nome, ou Idade"
					onChange={(e) => searchBar(e.target.value)}
				/>
			</div>
			<table
				className="table"
				cellSpacing="0"
				cellPadding="0">
				<thead>
					<tr className="table__head">
						<TableCells className="table__head___cell">nº</TableCells>
						<TableCells
							className="table__head___cell"
							onClick={(e) => ordenate("name")}
							>
								Nome
						</TableCells>
						<TableCells
							className="table__head___cell"
							onClick={(e) => ordenate("age")}
							>
								Idade
						</TableCells>
					</tr>
				</thead>
				<tbody className="table__body">
					{slicedList.map((item, index) => {
						return (
							<tr key={index} className="table__body___row">
								<TableCells
									className="table__body___cell">
										{index}
								</TableCells>
								<TableCells
									className="table__body___cell">
										{item.name}
								</TableCells>
								<TableCells
									className="table__body___cell">
										{item.age}
								</TableCells>

							</tr>
						)
					})
					}
				</tbody>
			</table>
			<div className="buttons">
				<Button
					className="previous hidden"
					paginate={previousPage}>
						Anterior
				</Button>
				<Button
					className="next"
					paginate={nextPage}>
						Próximo
				</Button>
			</div>
		</div>
	)
}

export default List;