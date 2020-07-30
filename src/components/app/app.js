import React, { useState, useEffect } from 'react';

import TodoList from '../todo-list';
import TodoAddItem from '../todo-add-item';
import TodoFilter from '../todo-fillter';
import SwapiService from '../../services/swapi-service';

import 'font-awesome/css/font-awesome.min.css';
import './app.css';

export default function App() {

  const [items, setItems] = useState([
    // { id: 1, name: 'Drink Coffee', birthYear: string, gender: string }
  ]);
  const [name, setName] = useState('');
  const [filter, setFilter] = useState('');


  useEffect(() => {
    const sw = new SwapiService();
    sw.getAllPeople().then((data) => {
      setItems(data);
    });
  }, []);

  const onHandleFilterChange = event => {
    setFilter(event.target.value);
  };


  const onHandleChange = (event) => {
    setName(event.target.value);
  }
  const onItemAddded = (name) => {
    if (name.length > 0) {
      const newList = [...items, createItem(name)];
      setItems(newList);
      setName('');
    }
  }

  const createItem = (name) => {
    const genderArr = [
      'male',
      'female',
      'unknown'
    ];
    return {
      id: ++(items.length),
      name,
      birthYear: Math.floor(Math.random() * 100) + 1,
      gender: genderArr[Math.floor(Math.random() * genderArr.length)]
    };
  }


  const onDelete = (idx) => {
    setItems(items.filter(({ id }) => id !== idx));
  }

  const filteredData = items.filter(item => {
    return Object.keys(item).some(key =>
      typeof item[key] === "string" && item[key].toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <div className="todo-app">

      <TodoFilter
        onHandleFilterChange={onHandleFilterChange} />

      <TodoAddItem
        name={name}
        onHandleChange={onHandleChange}
        onItemAddded={onItemAddded} />
      <TodoList
        items={filteredData}
        onDelete={onDelete} />
    </div>
  );
}


