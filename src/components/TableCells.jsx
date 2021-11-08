const TableCells = ({ index, name, age, className }) => {
	return (
			<>
			<td className={className}>{index}</td>
			<td className={className}>{name}</td>
			<td className={className}>{age}</td>
			</>
	)
}

export default TableCells;