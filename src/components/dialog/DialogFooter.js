import DialogActions from '@mui/material/DialogActions';
import React from 'react'
import { ConfirmDialogButton } from '../buttons';

export const DialogFooter = ({ onClose, type }) => {
    return (
        <DialogActions>
            <ConfirmDialogButton onClose={onClose} type={type} />
        </DialogActions>
    );
}