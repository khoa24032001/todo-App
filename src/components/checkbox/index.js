import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PropTypes from 'prop-types';



export const CheckBox = ({completed, change}) => {
    const changeStatus = () => {
        change(!completed);
    }
    return (
        <>
            {
                !completed ? <CheckCircleOutlineIcon sx={{color: "gray", fontSize: "50px"}} onClick={changeStatus}/> :
                <CheckCircleOutlineIcon sx={{color: "green", fontSize: "50px"}} onClick={changeStatus}/>
            }
        </>
    )
}

CheckBox.propTypes = {
    completed: PropTypes.bool.isRequired,
    change: PropTypes.func.isRequired
}