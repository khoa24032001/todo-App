import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { CheckBox } from '../../../components/checkbox';
import { ComboButton } from '../../../components/buttons';
import { ColorTag } from '../../../components/colorTag';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
      minHeight: 128,
    },
  }));


export const TodoItem = ({content, color, status, changeStatus}) => {
    return (
    <Box sx={{ flexGrow: 1,  border: "2px solid black", marginBottom: "15px" }}>
      <AppBar position="static" sx={{bgcolor: "#ffffff"}}>
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <CheckBox completed={status} change={changeStatus}/>
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, alignSelf: '', rowGap: '50px', color: "black" }}
          >
            <div style={{fontWeight: 'bold'}}>
              {content}
            </div>
            <ColorTag color={color}/>
          </Typography>
          <ComboButton/>
        </StyledToolbar>
      </AppBar>
    </Box>

    );
}

TodoItem.propTypes = {
    content: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    changeStatus: PropTypes.func.isRequired
}