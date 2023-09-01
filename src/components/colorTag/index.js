import React from 'react';
import PropTypes from 'prop-types';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import Box from '@mui/material/Box';

export const ColorTag = ({color}) => {
    return (
        <Box sx={{display: "flex"}}>
            Color:
            <CircleRoundedIcon sx={{color: {color}, marginX: "5px"}}/>
            {color}
        </Box>
    )
}

ColorTag.propTypes = {
    color: PropTypes.string.isRequired
}