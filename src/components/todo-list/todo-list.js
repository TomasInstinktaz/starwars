import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css';

const TodoList = ({ items, onDelete }) => {

	const elements = items.map((item) => {
		const { id, ...itemProps } = item;
		return (
			<tr key={id} className="list-group-item">
				<TodoListItem
					{...itemProps}
					onDelete={() => onDelete(id)} />
			</tr>
		);
	});

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>BirthYear</th>
					<th>Gender</th>
					<th>Planet</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{elements}
			</tbody>
		</table>
	);
};

export default TodoList;