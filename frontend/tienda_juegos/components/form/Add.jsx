import { Box, TextField, FormControlLabel, Button, Checkbox } from "@mui/material";
import React from "react";

export default function Add(props) {
    let tabOption = props.tabOption;

    const handleSubmit = () => {
        console.log("hello");
    }

    let form;
    if (tabOption == 0) {
        // Cliente
        form = (
            <div>
                <TextField margin="normal" required fullWidth id="nombre" label="Nombre" name="nombre" autoFocus />
                <TextField margin="normal" required fullWidth id="apellido" label="Apellido" name="apellido" autoFocus />
                <TextField margin="normal" required fullWidth id="email" label="Email" name="email" type="email" autoFocus />
                <TextField margin="normal" required fullWidth id="telefono" label="Telefono" name="telefono" autoFocus />
                <TextField margin="normal" required fullWidth id="direccion" label="Direccion" name="direccion" autoFocus />
            </div>
        );
    } else if (tabOption == 1) {
        // Juego
        form = (
            <div>
                <TextField margin="normal" required fullWidth id="nombre" label="Nombre" name="nombre" autoFocus />
                <TextField margin="normal" required fullWidth id="director" label="Director" name="director" autoFocus />
                <TextField margin="normal" required fullWidth id="protagonista" label="Protagonista" name="protagonista" autoFocus />
                <TextField margin="normal" required fullWidth id="productor" label="Productor" name="productor" autoFocus />
                <TextField margin="normal" required fullWidth id="plataforma" label="Plataforma" name="plataforma" autoFocus />
                <TextField margin="normal" required fullWidth id="lanzamiento" helperText="Lanzamiento" name="lanzamiento" type="date" autoFocus shrink />
            </div>
        );
    } else if (tabOption == 2) {
        // Alquiler
        form = (
            <div>
                <TextField margin="normal" required fullWidth id="id_cliente" label="ID Cliente" name="id_cliente" autoFocus />
                <TextField margin="normal" required fullWidth id="id_juego" label="ID Juego" name="id_juego" autoFocus />
                <TextField margin="normal" required fullWidth id="fecha_alquiler" helperText="Fecha alquiler" name="fecha_alquiler" type="date" autoFocus shrink />
            </div>
        );
    } else if (tabOption == 3) {
        // Precio
        form = (
            <div>
                <TextField margin="normal" required fullWidth id="id_juego" label="ID Juego" name="id_juego" autoFocus />
                <TextField margin="normal" required fullWidth id="precio" label="Precio" name="precio" type="number" autoFocus />
            </div>
        );
    }

    return (
        <div>
            <Box component='form' onSubmit={handleSubmit} noValidate>
                {form}
                <Button
                    type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                    Agregar
                </Button>
            </Box>
        </div>
    );
}