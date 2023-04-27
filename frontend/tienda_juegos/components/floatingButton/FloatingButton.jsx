import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import styles from './FloatingButton.module.css';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MyModal from '../modal/myModal';

const actions = [
    { icon: <SearchIcon className={styles.btn} />, name: 'Search' },
    { icon: <AddIcon className={styles.btn} />, name: 'Add' },
    { icon: <EditIcon className={styles.btn} />, name: 'Edit' },
    { icon: <DeleteIcon className={styles.btn} />, name: 'Delete' },
];

export default function FloatingButton(props) {
    const [showModal, setShowModal] = React.useState(false);
    const handleClick = () => {
        setShowModal(!showModal);
    }

    return (
        <Box className={styles.box}>
            <SpeedDial ariaLabel="Opciones" icon={<SettingsIcon className={styles.btn} />} FabProps={{ sx: { bgcolor: '#43464D' } }}>
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        FabProps={{
                            sx: {
                                bgcolor: '#43464D'
                            }
                        }}
                        onClick={handleClick}
                    />
                ))}
                {showModal && <MyModal callBack={handleClick} modalType={props.modalType} />}
            </SpeedDial>
        </Box>
    );
}