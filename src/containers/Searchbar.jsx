const Searchbar = ({ placeholder, onChange }) => {
	return (
		<input
			type="text"
			placeholder={placeholder}
			onChange={onChange}
		/>
	)
}

export default Searchbar;