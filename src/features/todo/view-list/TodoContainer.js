import React from "react";
import { TodoList } from "./TodoList";
import { TODO_DATA } from "../constants";

function TodoContainer() {
  return <TodoList data={TODO_DATA} />;
}

export default TodoContainer;
