import React from 'react';

import './todo-filter.css';


const TodoFilter = ({ filter, onHandleFilterChange }) => {
	return (
		<div className="todo-filter">
			<input type="text" placeholder="search" value={filter} onChange={onHandleFilterChange} />
		</div>
	);
};

export default TodoFilter;