import { Box, TextField, FormControlLabel, Button, Checkbox } from "@mui/material";
import React from "react";

const tabOption = {
    0: 'Cliente',
    1: 'Juego',
    2: 'Alquiler',
    3: 'Precio'
}

export default function Delete(props) {
    let tabOptn = tabOption[props.tabOption];
    let lbl = `ID ${tabOptn}`;
    const handleSubmit = () => {
        console.log("hello");
    }

    return (
        <div>
            <Box component='form' onSubmit={handleSubmit} noValidate>
                <TextField margin="normal" required fullWidth id="id" label={lbl} name="id" autoFocus />
                <Button
                    type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                    Borrar
                </Button>
            </Box>
        </div>
    );
}