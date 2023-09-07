import React from 'react';
import Stack from '@mui/material/Stack';
import { ExDialog } from '../dialog';

const DialogType = [
    {
        buttonType: 'Edit',
        bgcolor: 'green',
        dialogTitle: 'Edit your todo',
    },
    {
        buttonType: 'Delete',
        bgcolor: 'red',
        dialogTitle: 'Do you want to delete this todo ?',
    }
]


export const ListTodoButton = ({content}) => {
    return (
        <Stack spacing={2} direction="row">
            <ExDialog type={DialogType[0]} content = {content}/>
            <ExDialog type={DialogType[1]} content = {content}/>
        </Stack>
    );
}