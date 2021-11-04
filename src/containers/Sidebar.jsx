import { RadioInput } from "../components/RadioInput";
import { Slidebar } from "../components/Slidebar";
import { Searchbar } from "../components/Searchbar";

export function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar-search">
				<Searchbar />
			</div>
			<div>
				<h4>Filtrar</h4>
				<RadioInput />
			</div>
			<div>
				<h5>Idade</h5>
				<Slidebar />
			</div>
		</div>
	)
}
