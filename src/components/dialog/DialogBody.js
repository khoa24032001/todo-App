import DialogContent from '@mui/material/DialogContent';
import { DeleteDialog } from './dialogType/Delete';
import { ViewDialog } from './dialogType/View';
import React from 'react';

const renderSwitch = (type, content, color, status) => {
  switch(type) {
    case 'Delete':
      return <DeleteDialog content = {content}/>;
    
    case 'view':
      return <ViewDialog content = {content} color = {color} status = {status}/>;

    default:
      return (
        <>
          There is nothing in this dialog
        </>
      )
  }
};

export const DialogBody = ({type, content, color, status}) => {
    return (
        <DialogContent dividers>
          {renderSwitch(type, content, color, status)}
        </DialogContent>
    );
}