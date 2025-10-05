import {useState} from 'react';

const initialToDos = [
	{id : 1, text : "Make a cup of Coffee"},
	{id : 2, text : "Has to go and take Leo for a walk"}
];


const ToDoList = () => {
	
	const [todos, setTodos] = useState(initialToDos);
	
	const [newtodotext, setNewtodotext] = useState('');
	
	const handleSubmit = (e) => {
		// I think the thing below is used to clear some buffer or to prevent some default value i guess
		e.preventDefault();
		
		if(newtodotext.trim() == ''){
			return '';
		} 	
		
		const newTodo = {
			id : Date.now(),
			text : newtodotext
		};
		
		setTodos([...todos, newTodo]);
		
		setNewtodotext('');
	}
	
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input 
					type = "text"
					placeholder = "Add a new Task"
					value = {newtodotext}
					onChange = {e => setNewtodotext(e.target.value)}
				/>
				<button type="submit" >Add To-Do</button>
			</form>

				<h2>My To-Do List </h2>
				<ul>
					{todos.map(todo => {
						return <li key={todo.id}>{todo.text}</li>
					})}
				</ul>
		</div>
	) 
}


export default ToDoList ;