"use client";
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function CustomCard(props) {
    let card;
    if (props.cardType == 0) {
        card = (<Typography variant="body2" color="textSecondary" component="p">
            Nombre: {props.nombre}
            <br />
            Apellido: {props.apellido}
            <br />
            Email: {props.email}
            <br />
            Telefono: {props.telefono}
            <br />
            Direccion: {props.direccion}
        </Typography>);
    } else if (props.cardType == 1) {
        card = (
            <Typography variant="body2" color="textSecondary" component="p">
                <Typography variant="h5" color="textPrimary">
                    {props.nombre}
                </Typography>
                Director: {props.director}
                <br />
                Protagonista: {props.protagonista}
                <br />
                Productor: {props.productor}
                <br />
                Plataforma: {props.plataforma}
                <br />
                Lanzamiento: {props.fechaLanzamiento}
            </Typography>
        );
    } else if (props.cardType == 2) {
        card = (
            <Typography variant="body2" color="textSecondary" component="p">
                ID Cliente: {props.cliente_id}
                <br />
                ID Juego: {props.juego_id}
                <br />
                Fecha Alquiler: {props.fecha_alquiler}
                <br />
                Fecha Devolucion: {props.fecha_devolucion}
            </Typography>
        );
    } else if (props.cardType == 3) {
        card = (
            <Typography variant="body2" color="textSecondary" component="p">
                Id Juego: {props.juego_id}
                <br />
                Precio: {props.precio}
            </Typography>
        );
    }

    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    ID: {props.id}
                </Typography>
                {card}
            </CardContent>
        </Card>
    )
}

//export default Card;