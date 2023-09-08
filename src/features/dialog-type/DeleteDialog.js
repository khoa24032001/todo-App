import React from 'react'
import { DialogContainer } from '../../components/dialog'
import { Button } from '@mui/material'
import useToggle from '../../hooks/useToggle'


function DeleteDialog() {
    const { toggle: isOpenDeleteDial, handleOpen, handleClose } = useToggle()

    return (
        <>
            <Button variant='outlined' color="error" onClick={handleOpen}>Delete</Button>
            <DialogContainer open={isOpenDeleteDial} onClose={handleClose}>
                <DialogContainer.Header title='Delete todo' onClose={handleClose} />
                <DialogContainer.Body>
                    fdsfdsf
                </DialogContainer.Body>
                <DialogContainer.Footer>
                    fdffdsfdfds
                </DialogContainer.Footer>
            </DialogContainer>
        </>
    )
}

export default DeleteDialog