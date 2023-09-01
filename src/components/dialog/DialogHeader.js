import React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const DialogHeader = ({close}) => {
    return(
        <>
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Modal title
            </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={()=>{close()}}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                    >
                    <CloseIcon />
                </IconButton>
        </>
    )
}