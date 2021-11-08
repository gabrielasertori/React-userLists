const Searchbar = ({ placeholder, onChange, className, id }) => {
	return (
		<input
			id={id}
			className={className}
			type="text"
			placeholder={placeholder}
			onChange={onChange}
		/>
	)
}

export default Searchbar;