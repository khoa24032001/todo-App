import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import React from 'react'

export const DialogFooter = ({onClose}) => {
    return(
        <DialogActions>
            <Button autoFocus onClick={onClose}>
                Save changes
            </Button>
        </DialogActions>
    );
}