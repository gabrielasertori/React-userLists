import { useEffect, useState } from "react";

const TableCells = ({ children, className, onClick, span, id }) => {
	return (
			<>
			<td
				className="td"
				onClick={onClick}>
				<span
					className={span}
					id={id}>
				</span>
			</td>
			<td className={className}>{children}</td>
			</>
	)
}

export default TableCells;