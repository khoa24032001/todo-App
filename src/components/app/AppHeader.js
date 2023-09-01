import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import PropTypes from 'prop-types'
import { Button } from '@mui/material';

const AppHeaderStyle = {
    bgcolor: "#ffffff",
    borderBottom: "2px solid black", 
    color: "black"
}

/**
 * 
 * @param {*} props
 * @param {String} props.title - Title of header 
 * @returns {*} 
 */
export const AppHeader = ({title}) => {
    return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={AppHeaderStyle}>
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {title}
            </Typography>
            <Button variant="contained" sx={{color: "white", bgcolor:"blue"}}>Create</Button>
        </Toolbar>
      </AppBar>
    </Box>
    );
}

AppHeader.propTypes = {
    title: PropTypes.string.isRequired
}