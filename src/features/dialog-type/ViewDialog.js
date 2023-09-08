import React from 'react'
import { DialogContainer } from '../../components/dialog'
import { Box } from '@mui/material'

export const ViewDialog = ({ toggle, handleOpen, handleClose }) => {
    // const { toggle: isOpenViewDial, handleOpen, handleClose } = useToggle()

    return (
        <>
            <Box onClick={handleOpen}>
                <DialogContainer open={toggle} onClose={handleClose}>
                    <DialogContainer.Header title='View your todo' onClose={handleClose} />
                    <DialogContainer.Body>
                        fdsfdsf
                    </DialogContainer.Body>
                    <DialogContainer.Footer>
                        fdffdsfdfds
                    </DialogContainer.Footer>
                </DialogContainer>

            </Box>
        </>
    )
}
