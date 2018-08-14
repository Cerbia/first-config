import React from 'react';

class Title extends React.Component {
	propTypes: {
		numberOfTasks: React.PropTypes.number.isRequired;
	}

	render() {
		return (
			<div>
				<h1>Title of the app</h1>
				<p>Number of tasks: {this.props.numberOfTasks}</p>
			</div>
		);
	}
}

export default Title;