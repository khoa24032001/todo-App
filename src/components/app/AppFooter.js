import React from 'react';
import Pagination from '@mui/material/Pagination';

export const AppFooter = () =>{
    return(
        <div style={{display: "flex", justifyContent: "center"}}>
            <Pagination count={10} color="primary" />
        </div>
    );
}

AppFooter.propTypes = {
    
}