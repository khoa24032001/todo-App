import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export const ComboButton = () => {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained" sx={{color: "white", bgcolor:"green"}}>Edit</Button>
            <Button variant="contained" sx={{color: "white", bgcolor:"red"}}>Delete</Button>
        </Stack>
    );
}