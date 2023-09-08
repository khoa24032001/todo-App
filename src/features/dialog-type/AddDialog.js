import React from 'react'
import { DialogContainer } from '../../components/dialog'
import { Button } from '@mui/material'
import useToggle from '../../hooks/useToggle'

export const AddDialog = ({ handleSubmit }) => {
    const { toggle: isOpenAddDial, handleOpen, handleClose } = useToggle()

    return (
        <>
            <Button variant='outlined' onClick={handleOpen}>Add</Button>
            <DialogContainer open={isOpenAddDial} onClose={handleClose}>
                <DialogContainer.Header title='Add Todo' onClose={handleClose} />
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
