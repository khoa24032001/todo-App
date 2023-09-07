import React from 'react'
import Stack from '@mui/material/Stack'
import { TodoList } from '../../features/todo/view-list/TodoList';
import { Dropdown } from '../dropdown';

const Colors = [
    {value: 'red',    text: 'Red'   },
    {value: 'blue',   text: 'Blue'  },
    {value: 'green',   text: 'Green'  },
    {value: 'purple',   text: 'Purple'  },
    {value: 'orange',   text: 'Orange'  },
];

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

];

const Status = [
    {value: 'completed',    text: 'Completed'   },
    {value: 'incomplete',   text: 'Incomplete'  },
]

const Sort = [
    {value: 'dateCreated',    text: 'DateCreated'   },
    {value: 'name',   text: 'Name'  },
]

export const AppContent = () =>{
    return(
        <>
          <Stack direction={{ xs: 'column', xl: 'row' }}
            alignItems={{ xl: 'center' }}
            justifyContent='space-between'
            spacing={{ xs: 2, xl: 0 }} width={1}
            sx={{ px: { xs: 1, md: 2 }, py: 2 }}>
                <Stack direction={{ xs: 'column', sm: 'row' }}
                    alignItems={{ xs: 'flex-start', sm: 'stretch' }}
                    spacing={{ xs: 1, sm: 2 }}
                    flexGrow={1}
                >
                    <Dropdown input = {Colors} name = "Color"/>
                    <Dropdown input = {Status} name = "Status"/>
                </Stack>
                <Stack direction='row' alignItems='center' justifyContent='flex-end' spacing={{ xs: 1, md: 2 }} flexGrow={1}>
                    <Dropdown input = {Sort} name = "Sort by"/>
                </Stack> 
           </Stack>             
            <TodoList data = {Data}/>
        </>
    );
}

AppContent.propTypes = {
    
}