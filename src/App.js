import React from 'react';

import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';

import logo from './unsplash.jpg';

import './App.css';

const App = () => {

  //const tasks = ['Task 1', 'Task 2', 'Task 3'];
  const [tasks, setTasks] = React.useState(['Family & Friends Priority', 'Professional Task', 'Health & Wellness']);
  const tasksEl = [];

  // Don't change the state in the same scope as the return!!!
  //setTasks([...tasks, 'Task 4']);

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    const taskEl = <li>{task}</li>;

    tasksEl.push(taskEl);
  }
  // Entering Value by the user
  const onFormSubmitted = (event) => {
    event.preventDefault();

    const value = event.target.task.value;

    setTasks([...tasks, value]);
  };
 
  return (

    <>
      <Header className='App-header' id='header' title='This is the header'>
      <h1>Identify and Solve Work & Life Balance 🏃🏃🚵👌</h1>
        <img src={logo} className="App-logo"  alt ="logo" />
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