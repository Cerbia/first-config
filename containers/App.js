import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from './Title';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}
	addTodo(val) {
		const todo = {
			text: val,
			id: uuid.v4()
		};
		const data = [...this.state.data, todo];
		this.setState({data});
	}
	removeTodo(id) {
		const remainder = this.state.data.filter(todo => id !== todo.id);
		this.setState({data: reminder});
	}
	render(){
		return (
			<div className={style.TodoApp}>
				Tutaj pojawią się komponenty naszej aplikacji.
				<Title numberOfTasks={this.state.data.length}/>
			</div>
		);
	}
}

export default App;