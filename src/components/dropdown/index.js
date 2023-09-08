import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types'

export const Dropdown = ({ input, name, sx, defaultValue }) => {
    return (
        <>
            <Box sx={{ maxWidth: '200px', flex: 1, ...sx }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">{name}</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label={name}
                        defaultValue={defaultValue}
                    >
                        <MenuItem value="">
                            None
                        </MenuItem>
                        {input.map((item, idx) => {
                            return (<MenuItem key={idx} value={item.value}>{item.text}</MenuItem>)
                        })}
                    </Select>
                </FormControl>
            </Box>
        </>
    );
}

Dropdown.propTypes = {
    input: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
}