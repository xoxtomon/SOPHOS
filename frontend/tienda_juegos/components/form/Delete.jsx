import { Box, TextField, FormControlLabel, Button, Checkbox } from "@mui/material";
import React, { useState } from "react";

const tabOption = {
    0: 'cliente',
    1: 'juego',
    2: 'alquiler',
    3: 'precio'
}

export default function Delete(props) {
    let optionNumber = props.tabOption;
    let lbl = `ID ${tabOption[optionNumber]}`;
    const [id, setId] = useState();
    const base_url = 'http://localhost:8080/api/v1/';

    const handleSubmit = (event) => {
        event.preventDefault();
        let url = base_url + tabOption[optionNumber] + '/delete/' + `${id}`;

        fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            method: "DELETE",
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.status;
            })
            .catch((error) => {
                console.error("Error: ", error);
                // handle errors here
            });
    }

    return (
        <div>
            <Box component='form' onSubmit={handleSubmit} noValidate>
                <TextField margin="normal" required fullWidth id="id" label={lbl} name="id" onChange={(event) => setId(event.target.value)} autoFocus />
                <Button
                    type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                    Borrar
                </Button>
            </Box>
        </div>
    );
}