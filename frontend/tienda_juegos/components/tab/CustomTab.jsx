"use client";
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styles from './CustomTab.module.css';

//<Tab label="Clientes" className={value === 0 ? styles.activeTab : styles.tab} />
export default function CustomTab(props) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.callBack(newValue);
    };



    return (
        <div className={styles.container}>
            <Box >
                <Tabs value={value} onChange={handleChange} centered indicatorColor='transparent'>
                    <Tab label="Clientes" className={styles.tab} />
                    <Tab label="Juegos" className={styles.tab} />
                    <Tab label="Alquiler" className={styles.tab} />
                    <Tab label="Precios" className={styles.tab} />
                </Tabs>
            </Box>
        </div>
    );
}
