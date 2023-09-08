import React, { useState } from "react";
import "./App.css";
import { Stack } from '@mui/material'
import { AppHeader, AppContent, AppFooter } from "./components/app";
import { TodoFilter } from "./features/todo/view-list/TodoFilter";
import TodoContainer from "./features/todo/view-list/TodoContainer";
import { AddTodoButton } from "./components/buttons/AddTodoButton";
import { AddDialog } from "./features/dialog-type/AddDialog";

function App() {
  const [todo, setTodo] = useState([]);
  const [listTodo, setListTodo] = useState([]);

  const handleAdd = () => {
    setListTodo(prev => [...prev, todo])
  }

  return (
    <div className="App">
      <AppHeader title="TodoApp" renderActions={() => {
        return (
          <AddDialog handleSubmit={todo => setListTodo([...listTodo, todo])} />
        )
      }} />
      <AppContent
        contentRender={() => {
          return (
            <Stack >
              <TodoFilter />
              <Stack height='75vh' overflow='auto'>
                <TodoContainer />
              </Stack>
            </Stack>
          );
        }}
      />
      <AppFooter />
    </div>
  );
}

export default App;
