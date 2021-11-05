import { useState } from "react";
import { Searchbar } from "../components/Searchbar";

export function List({ list }) {
	const [search, setSearch] = useState("");
	const [order, setOrder] = useState(1);
	const [columnOrder, setColumnOrder] = useState('name');

	const itensPerPage = (item, index) => index < 250;

	const searchItem = (item, index) => {
		if (item.name.toLowerCase().startsWith(search.toLowerCase())) {
			return item
		} else if (item.age.toString() === search) {
			return item
		}
	}

	const ordenate = (columnName) => {
		setOrder(-order);
		setColumnOrder(columnName)
	}

	list = list.sort((a, b) => {
		return a[columnOrder] < b[columnOrder] ? -order : order;
	})

	return (
		<div>
			<input
				type="text"
				placeholder="pesquisar"
				onChange={e => setSearch(e.target.value)}
			/>
			{console.log(list)}

			<table>
				<thead>
					<tr>
						<th onClick={e => ordenate('name')}>Nome</th>
						<th onClick={e => ordenate('age')}>Idade</th>
					</tr>
				</thead>
				<tbody>
					{list.filter(itensPerPage)
						.filter(searchItem)
						.map( (item, index) => {
							return (
								<tr key={index}>
									<td>{item.name}</td>
									<td>{item.age}</td>
								</tr>
							)
					})}
				</tbody>
			</table>
		</div>
	)
}