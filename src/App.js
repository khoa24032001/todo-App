import React, {useState} from 'react'
import './App.css';
import { Header } from './components/header';
import { ColorTag } from './components/colorTag';
import { ComboButton } from './components/buttons';
import { CheckBox } from './components/checkbox';
import { TodoItem } from './components/todoItem';

function App() {
  const [completed, isCompleted] = useState(false)
  return (
    <div className="App">
      <Header title="Todo App" />
      <ColorTag color="Blue"/>
      <ComboButton/>
      <CheckBox completed={completed} change={isCompleted}/>
      <TodoItem color="Red" status={completed} changeStatus={isCompleted}/>
    </div>
  );
}

export default App;
