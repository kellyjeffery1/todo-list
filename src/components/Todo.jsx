import React from 'react';

function Todo(props) {
	const completedStyle = {
		fontStyle: 'italic',
		color: '#cdcdcd',
		textDecoration: 'line-through'
	};
	return (
		<div className="todo-items">
			<input
				type="checkbox"
				checked={props.todo.completed}
				onChange={(event) => props.handleChange(props.todo.id)}
			/>
			<p style={props.todo.completed ? completedStyle : null}>{props.todo.text}</p>
		</div>
	);
}
export default Todo;
