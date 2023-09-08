import React from 'react';
import Stack from '@mui/material/Stack';
import DeleteDialog from '../../features/dialog-type/DeleteDialog';
import EditDialog from '../../features/dialog-type/EditDialog';





export const ListTodoButton = ({ content }) => {
    return (
        <Stack spacing={2} direction="row">
            <DeleteDialog />
            <EditDialog />
        </Stack>
    );
}