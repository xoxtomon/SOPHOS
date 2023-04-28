"use client";
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function CustomCard(props) {
    const { cardType, id, nombre, apellido, email, telefono, direccion, director, protagonista, productor, plataforma, fechaLanzamiento, cliente_id, juego_id, fecha_alquiler, fecha_devolucion, precio } = props;
    let card;

    if (cardType == 0) {
        card = (<Typography variant="body2" color="textSecondary" component="p">
            Nombre: {nombre} <br /> Apellido: {apellido} <br /> Email: {email} <br /> Telefono: {telefono} <br /> Direccion: {direccion}
        </Typography>);
    } else if (cardType == 1) {
        card = (
            <Typography variant="body2" color="textSecondary" component="p">
                <Typography variant="h5" color="textPrimary">
                    {nombre}
                </Typography>
                Director: {director} <br /> Protagonista: {protagonista} <br /> Productor: {productor} <br /> Plataforma: {plataforma} <br /> Lanzamiento: {fechaLanzamiento}
            </Typography>
        );
    } else if (cardType == 2) {
        card = (
            <Typography variant="body2" color="textSecondary" component="p">
                ID Cliente: {cliente_id} <br /> ID Juego: {juego_id} <br /> Fecha Alquiler: {fecha_alquiler} <br /> Fecha Devolucion: {fecha_devolucion}
            </Typography>
        );
    } else if (cardType == 3) {
        card = (
            <Typography variant="body2" color="textSecondary" component="p">
                Id Juego: {juego_id} <br /> Precio: {precio}
            </Typography>
        );
    }

    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    ID: {id}
                </Typography>
                {card}
            </CardContent>
        </Card>
    )
}

//export default Card;