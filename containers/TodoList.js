import React from 'react';

const TodoList = ({dataToPresent, action}) => 
		<ul>
			{dataToPresent.map(
				(item) => <li onClick={() => action(item.id)} key={item.id}>{item.text}</li>
			)}
		</ul>;

export default TodoList;