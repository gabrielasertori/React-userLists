import { useState } from "react"
import { List } from "../containers/List";

export function Searchbar(props) {
	const list = props.info;
	const [search, setSearch] = useState("");

	return (
		<div>
			<input type="text" placeholder="Pesquisar..." onChange={e => setSearch(e.target.value)}/>

			{list.filter((item, index) => index < 50).filter(item => {
			if (item.name.toLowerCase().includes(search.toLowerCase())) {
				return item
			}}).map((item, index) => {
				return (
					<div key={index}>
						<p>{item.name}</p>
					</div>
				)
			})}
		</div>
	)
}