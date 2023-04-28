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
                {propsArray.map((item, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        {props.cardType == 0 && (
                            <CustomCard id={item.id} nombre={item.nombre} apellido={item.apellido} email={item.email} telefono={item.telefono} direccion={item.direccion} cardType={props.cardType} />
                        )}
                        {props.cardType == 1 && (
                            <CustomCard id={item.id} nombre={item.nombre} director={item.director} protagonista={item.protagonista} productor={item.productor} plataforma={item.plataforma} fechaLanzamiento={item.fecha_lanzamiento} cardType={props.cardType} />
                        )}
                        {props.cardType == 2 && (
                            <CustomCard id={item.id} cliente_id={item.cliente_id} juego_id={item.juego_id} fecha_alquiler={item.fecha_alquiler} fecha_devolucion={item.fecha_devolucion} cardType={props.cardType} />
                        )}
                        {props.cardType == 3 && (
                            <CustomCard id={item.id} juego_id={item.juego_id} precio={item.precio} cardType={props.cardType} />
                        )}
                    </Grid>
                ))}
            </ Grid>
        </div>
    )
}