const TableCells = ({ children, className, onClick }) => {
	return (
			<>
			<td onClick={onClick} className={className}>{children}</td>
			</>
	)
}

export default TableCells;