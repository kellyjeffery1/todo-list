import React from 'react';
import Header from './components/Header';
import Todo from './components/Todo';
import Footer from './components/Footer';
import TodoData from './TodoData';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todo: TodoData
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(id) {
		this.setState((prevState) => {
			const updatedTodo = prevState.todo.map((Todo) => {
				if (Todo.id === id) {
					Todo.completed = !Todo.completed;
				}
				return Todo;
			});
			return updatedTodo;
		});
	}

	render() {
		const choreComponent = this.state.todo.map((chore) => {
			return <Todo todo={chore} key={chore.id} handleChange={this.handleChange} />;
		});
		return (
			<div>
				<Header />

				<div className="Todo-list">{choreComponent}</div>

				<Footer />
			</div>
		);
	}
}

export default App;
