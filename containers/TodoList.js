import React from 'react';
import { hot } from 'react-hot-loader';

const TodoList = ({dataToPresent, action}) => 
		<ul>
			{dataToPresent.map(
				(item) => <li onClick={() => action(item.id)} key={item.id}>{item.text}</li>
			)}
		</ul>;

export default TodoList;
