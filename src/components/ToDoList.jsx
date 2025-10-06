import {useState, useEffect} from 'react';

const ToDoList = () => {
	
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
		.then(res => res.json())
		.then(data => {
			const formatedData = data.map(item => ({
				id : item.id,
				text : id.title 
			}));
		})
			setTodos(formatedData);
			setIsLoading(false);
	})

	if (isLoading) {
		return <p>The Website is Loading...</p>
	}

	return (
		<div>
			<h1>Welcome to my To Do list App ! </h1>

		</div>
	)



}

export default ToDoList;