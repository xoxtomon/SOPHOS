"use client";
import { Grid } from '@mui/material';
import React from 'react';
import styles from './CardGrid.module.css';
import CustomCard from '../card/CustomCard';

//{{ xs: 2, md: 3 }}

export default function CardGrid(props) {
    let propsArray = props.propsArray;

    return (
        <div className={styles.grid}>
            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {propsArray.map((prop, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <CustomCard id={prop.id} name={prop.name} lastName={prop.lastName} email={prop.email} />
                    </Grid>
                ))}
            </ Grid>
        </div>
    )
}
