"use client";
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function CustomCard(props) {
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    ID: {props.id}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Name: {props.name}
                    <br />
                    Lastname: {props.lastname}
                    <br />
                    Email: {props.email}
                </Typography>
            </CardContent>
        </Card>
    )
}

//export default Card;