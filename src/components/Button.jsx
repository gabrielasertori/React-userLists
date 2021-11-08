const Button = ({ children, paginate, className }) => {
	return (
		<button className={className} onClick={paginate}>{children}</button>
	)
}

export default Button;