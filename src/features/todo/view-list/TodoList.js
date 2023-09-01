import React from 'react'
import { TodoItem } from './TodoItem'
import { Container } from '@mui/material'


const Data = [
    {
        content: 'Learn React',
        color: 'red',
        completed: true
    },
    {
        content: 'Learn Japanese',
        color: 'blue',
        completed: false
    },
    {
        content: 'Learn History',
        color: 'green',
        completed: false
    },
    {
        content: 'Learn Company Rules',
        color: 'purple',
        completed: true
    },
    {
        content: 'Finish today task',
        color: 'orange',
        completed: true
    }

]

export const TodoList = () =>{
    const listTodo = Data.map((id) => <TodoItem content={id.content} color={id.color} status={id.completed} />)
    return(
        <Container maxWidth='md'>
            {listTodo}
        </Container>
    )
}
    