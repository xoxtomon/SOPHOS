import { Box, TextField, FormControlLabel, Button, Checkbox } from "@mui/material";
import React, { useState } from "react";


export default function Edit(props) {
    let tabOption = props.tabOption;
    const base_url = 'http://localhost:8080/api/v1/';

    const handleSubmit = (event) => {
        event.preventDefault();

        let url = base_url;
        if (tabOption == 2) {
            const tmp_date = new Date(fecha_alquiler);
            url = url + `alquiler/${id}/${tmp_date.toISOString()}`;
        } else if (tabOption == 3) {
            url = url + `precio/${id}/${precio}`;
        } else if (tabOption == 1) {
            url = url + `juego/${id}/${nombre}`;
        } else {
            url = url + `cliente/${id}/${nombre}`;
        }
        fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            method: "PUT",
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .catch((error) => {
                console.error("Error: ", error);
                // handle errors here
            });

        // Go Back to Main
        location.reload();
    }

    let form;
    if (tabOption == 2) {
        form = (
            <TextField margin="normal" required fullWidth id="fecha_alquiler" helperText="Fecha Alquiler" name="fecha_alquiler" type="date" autoFocus onChange={(event) => setFechaAlquiler(event.target.value)} />
        );
    } else if (tabOption == 3) {
        form = (
            <TextField margin="normal" required fullWidth id="precio" label="Precio" name="precio" autoFocus onChange={(event) => setPrecio(event.target.value)} />
        );
    } else {
        form = (
            <TextField margin="normal" required fullWidth id="nombre" label="Nombre" name="nombre" autoFocus onChange={(event) => setNombre(event.target.value)} />
        );
    }

    const [id, setId] = useState(null);
    const [fecha_alquiler, setFechaAlquiler] = useState(null);
    const [precio, setPrecio] = useState(0);
    const [nombre, setNombre] = useState(null);


    return (
        <div>
            <Box component='form' onSubmit={handleSubmit} noValidate>
                <TextField margin="normal" required fullWidth id="id" label="ID" name="id" autoFocus onChange={(event) => setId(event.target.value)} />
                {form}
                <Button
                    type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                    Editar
                </Button>
            </Box>
        </div>
    );
}