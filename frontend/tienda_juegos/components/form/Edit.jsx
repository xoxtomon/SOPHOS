import { Box, TextField, FormControlLabel, Button, Checkbox } from "@mui/material";
import React from "react";


export default function Edit(props) {
    let tabOption = props.tabOption;

    const handleSubmit = () => {
        console.log("hello");
    }

    let form;
    if (tabOption == 2) {
        form = (
            <TextField margin="normal" required fullWidth id="fecha_alquiler" helperText="Fecha Alquiler" name="fecha_alquiler" type="date" autoFocus />
        );
    } else if (tabOption == 3) {
        form = (
            <TextField margin="normal" required fullWidth id="precio" label="Precio" name="precio" autoFocus />
        );
    } else {
        form = (
            <TextField margin="normal" required fullWidth id="nombre" label="Nombre" name="nombre" autoFocus />
        );
    }

    return (
        <div>
            <Box component='form' onSubmit={handleSubmit} noValidate>
                <TextField margin="normal" required fullWidth id="id" label="ID" name="id" autoFocus />
                {form}
                <Button
                    type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                    Editar
                </Button>
            </Box>
        </div>
    );
}