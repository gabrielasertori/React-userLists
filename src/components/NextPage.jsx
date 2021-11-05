const NextPage = ({ currentPage, paginate }) => {
	return (
		<button onClick={() => paginate(currentPage + 1)}>Next</button>
	)
}

export default NextPage;