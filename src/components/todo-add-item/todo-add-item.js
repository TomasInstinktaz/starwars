import React from 'react';

import './todo-add-item.css';

const TodoAddItem = ({ name, onHandleChange, onItemAddded }) => {
	return (
		<div className="todo-add-item">
			<input type="text" value={name} onChange={onHandleChange} />
			<button type="button" disabled={(name.length === 0 ? true : false)} onClick={() => onItemAddded(name)}>
				Add
		 </button >
		</div >
	);
};

export default TodoAddItem;