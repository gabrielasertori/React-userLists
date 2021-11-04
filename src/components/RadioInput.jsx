export function RadioInput(props) {
	return (
		<div>
			<form>
				<p>Nome</p>
				<div>
					<input id="a-z" type="radio" value="A-Z"/>
					<label htmlFor="a-z">A - Z</label>
				</div>
				<div>
					<input id="z-a" type="radio" value="Z-A"/>
					<label for="z-a">Z - A</label>
				</div>
			</form>
		</div>
	)
}

