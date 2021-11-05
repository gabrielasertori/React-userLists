import { useEffect, useState } from "react";

const Pagination = ({ currentPage, paginate }) => {

	return (
		<button onClick={() => paginate(currentPage + 1)}>Next</button>
	)
}

export default Pagination;