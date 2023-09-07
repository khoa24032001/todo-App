import React from "react";
import { TodoItem } from "./TodoItem";
import { Container } from "@mui/material";
import PropTypes from "prop-types";

export const TodoList = ({ data }) => {
  const listTodo = data.map((todo, idx) => (
    <TodoItem
      key={idx}
      content={todo.content}
      color={todo.color}
      status={todo.completed}
    />
  ));
  return <Container maxWidth="md">{listTodo}</Container>;
};

TodoList.propTypes = {
  data: PropTypes.array.isRequired,
};
