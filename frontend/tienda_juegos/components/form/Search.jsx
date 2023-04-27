import { Box, TextField, FormControlLabel, Button, Checkbox } from "@mui/material";
import React from "react";


export default function Search(props) {
    let tabOption = props.tabOption;

    const handleSubmit = () => {
        console.log("hello");
    }

    let form;
    if (tabOption == 1) {
        form = (
            <div>
                <TextField margin="normal" fullWidth id="director" label="Director" name="fecha_alquiler" autoFocus />
                <TextField margin="normal" fullWidth id="protagonista" label="Protagonista" name="protagonista" autoFocus />
                <TextField margin="normal" fullWidth id="productor" label="Productor" name="productor" autoFocus />
                <TextField margin="normal" fullWidth id="fecha_lanzamiento" helperText="Fecha Lanzamiento" name="fecha_lanzamiento" type="date" autoFocus />
            </div>
        );
    }

    return (
        <div>
            <Box component='form' onSubmit={handleSubmit} noValidate>
                <TextField margin="normal" required fullWidth id="id" label="ID" name="id" autoFocus />
                {form}
                <Button
                    type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                    Buscar
                </Button>
            </Box>
        </div>
    );
}