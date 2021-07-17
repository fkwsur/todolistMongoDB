import React from 'react';
import './App.scss';
import './App.css';
import {TodoList} from './component/TodoList.jsx'
import {ListManage} from './component/ListManage.jsx'

const  App = () => {
  return (
    <div className="App">
      <h2>Todo List</h2>
      <TodoList />
      <ListManage />
    </div>
  );
}

export default App;
