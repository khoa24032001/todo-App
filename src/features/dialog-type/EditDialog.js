import React from 'react'
import { DialogContainer } from '../../components/dialog'
import { Button } from '@mui/material'
import useToggle from '../../hooks/useToggle'

function EditDialog() {
    const { toggle: isOpenEditDial, handleOpen, handleClose } = useToggle()

    return (
        <>
            <Button variant='outlined' color="success" onClick={handleOpen}>Edit</Button>
            <DialogContainer open={isOpenEditDial} onClose={handleClose}>
                <DialogContainer.Header title='Edit your todo' onClose={handleClose} />
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

export default EditDialog