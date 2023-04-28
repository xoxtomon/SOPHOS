import { Box, TextField, FormControlLabel, Button, Checkbox } from "@mui/material";
import React, { useState } from "react";
import CustomCard from "../card/CustomCard";

const tabOptionUrl = {
    0: 'cliente',
    1: 'juego',
    2: 'alquiler',
    3: 'precio'
}

export default function Search(props) {
    let tabOption = props.tabOption;
    const base_url = 'http://localhost:8080/api/v1/'
    const [id, setId] = useState(null);
    const [director, setDirector] = useState(null);
    const [protagonista, setProtagonista] = useState(null);
    const [productor, setProductor] = useState(null);
    const [fechaLanzamiento, setFechaLanzamiento] = useState(null);

    
    const reset = () => {
        setId(null);
        setDirector(null);
        setProtagonista(null);
        setProductor(null);
        setFechaLanzamiento(null);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        let url = base_url;
        if (tabOption !== 1) {
            url = url + tabOptionUrl[tabOption] + "/" + id
        } else {
            if (id !== null) {
                url = url + 'juego/' + id;
            } else if (director !== null) {
                url = url + 'juego/director/' + director;
                console.log(url);
            } else if (protagonista !== null) {
                url = url + 'juego/protagonista/' + protagonista;
                console.log(url);
            } else if (productor !== null) {
                url = url + 'juego/productor/' + productor;
            } else if (fechaLanzamiento !== null) {
                const tmp_date = new Date(fechaLanzamiento);
                url = url + 'juego/lanzamiento/' + tmp_date.toISOString().slice(0, -14);
            }
        }
        fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            method: "GET",
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                <CustomCard id={data.id} nombre={data.nombre} director={data.director} protagonista={data.protagonista} productor={data.productor} plataforma={data.plataforma} fechaLanzamiento={data.fecha_lanzamiento} cardType={1} />
            })
            .catch((error) => {
                console.error("Error: ", error);
                // handle errors here
            });
    }

    let form;
    if (tabOption == 1) {
        form = (
            <div>
                <TextField margin="normal" fullWidth id="director" label="Director" name="director" autoFocus onChange={(event) => setDirector(event.target.value)} />
                <TextField margin="normal" fullWidth id="protagonista" label="Protagonista" name="protagonista" onChange={(event) => setProtagonista(event.target.value)} />
                <TextField margin="normal" fullWidth id="productor" label="Productor" name="productor" autoFocus onChange={(event) => setProductor(event.target.value)} />
                <TextField margin="normal" fullWidth id="fecha_lanzamiento" helperText="Fecha Lanzamiento" name="fecha_lanzamiento" type="date" autoFocus onChange={(event) => setFechaLanzamiento(event.target.value)} />
            </div>
        );
    }

    return (
        <div>
            <Box component='form' onSubmit={handleSubmit} noValidate>
                <TextField margin="normal" fullWidth id="id" label="ID" name="id" autoFocus onChange={(event) => setId(event.target.value)} />
                {form}
                <Button
                    type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                    Buscar
                </Button>
            </Box>
        </div>
    );
}