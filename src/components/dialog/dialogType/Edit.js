import Typography from '@mui/material/Typography';
import React from 'react'
import Box from '@mui/material/Box';
import { Dropdown } from '../../dropdown';
import { COLORS } from '../../../utils/constants';
import TextField from '@mui/material/TextField';

export const EditDialog = ({ content, color }) => {
    return (
        <Typography gutterBottom sx={{ display: 'flex', flexDirection: 'column', alignContent: 'space-between' }}>
            <Box sx={{ display: "flex", mb: "7px", flexDirection: "row" }}>
                <Typography alignSelf={'flex-end'} mr="7px">
                    Content:
                </Typography>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Enter your todo"
                    type="text"
                    fullWidth
                    variant="standard"
                    marginLeft="7px"
                    alignSelf={'center'}
                    defaultValue={content}
                />
            </Box>
            <Box sx={{ display: "flex", mt: "7px", flexDirection: "row" }}>
                <Typography alignSelf={'center'} mr="7px">
                    Color:
                </Typography>
                <Dropdown input={COLORS} name="Change your color" defaultValue={color} />
            </Box>
        </Typography>
    );
}