import '../styles/Todolist.css';
import { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import TodolistCard from './TodolistCard';
import Loading from './Loading';

function Todolist(props) {
  let loading = props.loading;
  const inputRef = useRef(null);

  const [todoList, setTodoList] = useState(() => {
    return JSON.parse(localStorage.getItem('task-list')) || [];
  });

  useEffect(() => {
    // console.log('EFFECT');
    localStorage.setItem('task-list', JSON.stringify(todoList));
  }, [todoList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempList = JSON.parse(localStorage.getItem('task-list'));
    tempList.push(inputRef.current.value);
    localStorage.setItem('task-list', JSON.stringify(tempList));

    inputRef.current.value = '';

    setTodoList(tempList);
  };

  function triggerDelete(task, index) {
    if (window.confirm(`Are you sure to delete this task? \n${task}`)) {
      let taskList = JSON.parse(localStorage.getItem('task-list'));
      taskList.splice(index, 1);
      localStorage.setItem('task-list', JSON.stringify(taskList));

      setTodoList(taskList);
    }
  }

  return (
    <div>
      {/* {console.log('RENDER')} */}
      <Navbar weather={props.weather} loading={props.loading} />
      <div className="todo-container">
        <h1>To do list</h1>
        <div className="todo-input-container">
          <input type="text" id="country" ref={inputRef}></input>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <ul className="list-item">
          {JSON.parse(localStorage.getItem('task-list')).map((list, index) => (
            <TodolistCard
              list={list}
              index={index}
              key={index}
              handleDelete={triggerDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todolist;
