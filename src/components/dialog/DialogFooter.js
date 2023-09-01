import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import React from 'react'

export const DialogFooter = ({close}) => {
    return(
        <DialogActions>
            <Button autoFocus onClick={()=>{close()}}>
                Save changes
            </Button>
        </DialogActions>
    );
}