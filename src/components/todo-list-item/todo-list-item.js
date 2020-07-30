import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ name, birthYear, gender, onDelete }) => {

	return (
		<React.Fragment>
			<td>{name}</td>
			<td>{birthYear}</td>
			<td>{gender}</td>
			<td><button
				onClick={onDelete}
			>
				<i className="fa fa-trash-o"></i>
			</button></td>
		</React.Fragment>
		// <span>
		// 	<span
		// 		className="item__label">
		// 		{name}
		// 	</span>

		// 	<button type="button"
		// 		className="item__btn"
		// 	>
		// 		<i className="fa fa-trash-o"></i>
		// 	</button>
		// </span>
	);
};

export default TodoListItem;