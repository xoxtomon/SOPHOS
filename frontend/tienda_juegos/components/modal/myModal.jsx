import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import MyForm from '../form/MyForm';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MyModal(props) {
    const handleClick = () => {
        props.callBack(null)
    }

    return (
        <Modal
            open={handleClick}
            onClose={handleClick}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >

            <Box sx={style}>
                <MyForm tabType={props.tabType} optionType={props.optionType} />
            </Box>

        </Modal>
    )
}