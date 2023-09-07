import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { DialogBody } from './DialogBody';
import { DialogFooter } from './DialogFooter';
import { DialogHeader } from './DialogHeader';

const DialogStyle = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


export const ExDialog = ({ type, content }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="contained" sx={{ color: "white", bgcolor: `${type.bgcolor}` }} onClick={handleClickOpen}>
                {type.buttonType}
            </Button>
            <DialogStyle
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                scroll='paper'
                fullWidth
            >
                <DialogHeader onClose={handleClose} dialogTitle={type.dialogTitle} />
                <DialogBody type={type.buttonType} content={content} />
                <DialogFooter onClose={handleClose} />
            </DialogStyle>
        </>
    );
}