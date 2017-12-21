import React from 'react';
import CreateTodo from '../components/CreateTodo';
import TodoList from '../components/TodoList';
// import NavButton from '../components/NavButton';

const App = () => (
  <div>
    <CreateTodo />
    {/* <NavButton /> */}
    <TodoList />
  </div>
);

export default App;
