import React from 'react'
import './App.css';
import { AppHeader, AppContent, AppFooter } from './components/app';
import { TodoList } from './features/todo/view-list/TodoList';
import { ExDialog } from './components/dialog';

function App() {
  return (
    <div className="App">
      <AppHeader title="TodoApp"/>
      <AppContent/>
      <AppFooter/>
      <ExDialog/>
      {/* <TodoList/> */}
    </div>
  );
}

export default App;
