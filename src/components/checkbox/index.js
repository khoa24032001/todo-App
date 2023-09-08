import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PropTypes from 'prop-types';



export const CheckBox = ({ state }) => {
    const [completed, isCompleted] = React.useState(state);
    const changeStatus = () => {
        isCompleted(!completed);
        console.log(completed);
    }
    return (
        <>
            {
                !completed ? <CheckCircleOutlineIcon sx={{ color: "gray", fontSize: "50px" }} onClick={changeStatus} /> :
                    <CheckCircleOutlineIcon sx={{ color: "green", fontSize: "50px" }} onClick={changeStatus} />
            }
        </>
    )
}

CheckBox.propTypes = {
    state: PropTypes.bool.isRequired,
}