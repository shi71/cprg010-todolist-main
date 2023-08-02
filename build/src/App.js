import React from 'react';

import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';

import logo from './images/logo.svg';

import './App.css';

const App = () => {

  //const tasks = ['Task 1', 'Task 2', 'Task 3'];
  const [tasks, setTasks] = React.useState(['Task 1', 'Task 2', 'Task 3']);
  const tasksEl = [];

  // Don't change the state in the same scope as the return!!!
  //setTasks([...tasks, 'Task 4']);

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    const taskEl = <li>{task}</li>;

    tasksEl.push(taskEl);
  }

  const onFormSubmitted = (event) => {
    event.preventDefault();

    const value = event.target.task.value;

    setTasks([...tasks, value]);
  };

  return (
    <>
      <Header className='top-header' id='header' title='This is the header'>
        <h1>Joe Blow's Website 🚀🐨</h1>
        <img src={logo} width={55} height={55} />
      </Header>
      <form onSubmit={onFormSubmitted}>
        <input type='text' name='task' id='task' />
        <button type='submit'>Add Task</button>
      </form>
      <TodoList>
        {tasksEl}
      </TodoList>
      <Footer />
    </>
  );
}

export default App;
