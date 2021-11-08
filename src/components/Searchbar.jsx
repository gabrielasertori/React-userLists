const Searchbar = ({ placeholder, onChange, className }) => {
	return (
		<input
			className={className}
			type="text"
			placeholder={placeholder}
			onChange={onChange}
		/>
	)
}

export default Searchbar;