/* V. Fetch API
** V. Set 2 lists (Original and Sliced)
** 3. Set slice function
** 4. Map sliced list
** 5. Set pagination button
** 6. Implement functionality to button
** 7. Set searchbar
** 8. Implement functionality to searchbar
** 9. Set sort by column
** 10. Implement functionality to sort
** 11. Style componentes
** 12. Style list
** 13. Style page
*/

import { useEffect, useState } from "react"


const List = () => {
	const [originalList, setOriginalList] = useState([]);
	const [slicedList, setSlicedList] = useState([]);

	const fetchApi = () => {
		fetch("https://random-persons.herokuapp.com/users")
			.then(res => res.json())
			.then(data => {
				setOriginalList(data.data)
				setSlicedList(sliceList(data.data))
			})
	}

	useEffect(() => {
		fetchApi();
	}, [])
}