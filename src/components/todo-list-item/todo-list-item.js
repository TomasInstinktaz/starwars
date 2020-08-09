import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ name, birthYear, gender, planet_name, onDelete }) => {

	return (
		<React.Fragment>
			<td>{name}</td>
			<td>{birthYear}</td>
			<td>{gender}</td>
			<td>{planet_name}</td>
			<td><button
				onClick={onDelete}
			>
				<i className="fa fa-trash-o"></i>
			</button></td>
		</React.Fragment>
	);
};

export default TodoListItem;