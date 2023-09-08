import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export const ConfirmDialogButton = ({ onClose, type, todo, setListTodo }) => {
    // const handleAdd = () => {
    //     setListTodo(prev => [...prev, todo])
    //     onClose()
    // }
    return (
        <>
            {(type === 'Add' || type === 'Edit') ?
                (<Stack spacing={2} direction="row">
                    <Button autoFocus sx={{ color: "blue" }} onClick={onClose}>
                        Return
                    </Button>
                    <Button autoFocus sx={{ color: "green" }} onClick={onClose}>
                        Confirm
                    </Button>
                </Stack>)
                : type === 'Delete' ?
                    (<Stack spacing={2} direction="row">
                        <Button autoFocus sx={{ color: "blue" }} onClick={onClose}>
                            Return
                        </Button>
                        <Button autoFocus sx={{ color: "red" }} onClick={onClose}>
                            Delete
                        </Button>
                    </Stack>) :
                    (<Stack spacing={2} direction="row">
                        <Button autoFocus sx={{ color: "blue" }} onClick={onClose}>
                            Return
                        </Button>
                    </Stack>)
            }
        </>
    );
}