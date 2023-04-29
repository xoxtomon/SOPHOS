import { Box, TextField, FormControlLabel, Button, Checkbox } from "@mui/material";
import React, { useState, useEffect } from "react";
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
    const [nombre, setNombre] = useState(null);
    const [apellido, setApellido] = useState(null);
    const [email, setEmail] = useState(null);
    const [telefono, setTelefono] = useState(null);
    const [direccion, setDireccion] = useState(null);

    const [director, setDirector] = useState(null);
    const [protagonista, setProtagonista] = useState(null);
    const [productor, setProductor] = useState(null);
    const [plataforma, setPlataforma] = useState(null);
    const [fechaLanzamiento, setFechaLanzamiento] = useState(null);

    const [id_cliente, setIdCliente] = useState(null);
    const [id_juego, setIdJuego] = useState(null);
    const [fecha_alquiler, setfechaAlquiler] = useState(null);
    const [fecha_devolucion, setfechaDevolucion] = useState(null);

    const [precio, setPrecio] = useState(null);


    const [show, setshow] = useState(false);
    const handleShow = () => {
        setshow(!show);
    }

    const reset = () => {
        setId(null);
        setNombre(null);
        setDirector(null);
        setProtagonista(null);
        setProductor(null);
        setPlataforma(null);
        setFechaLanzamiento(null);
        setApellido(null);
        setEmail(null);
        setTelefono(null);
        setDireccion(null);
        setIdCliente(null);
        setIdJuego(null);
        setfechaAlquiler(null);
        setfechaDevolucion(null);
        setPrecio(null);
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
                const { id, nombre, apellido, email, telefono, direccion,
                    id_cliente, id_juego, fecha_alquiler, fecha_devolucion,
                    director, protagonista, productor, plataforma, fecha_lanzamiento, precio } = data;
                setId(id);
                setNombre(nombre);
                setDirector(director);
                setProtagonista(protagonista);
                setProductor(productor);
                setPlataforma(plataforma);
                setFechaLanzamiento(fecha_lanzamiento);
                setApellido(apellido);
                setEmail(email);
                setTelefono(telefono);
                setDireccion(direccion);
                setIdCliente(id_cliente)
                setIdJuego(id_juego);
                setfechaAlquiler(fecha_alquiler);
                setfechaDevolucion(fecha_devolucion);
                setPrecio(precio);

                handleShow();
            })
            .catch((error) => {
                console.error("Error: ", error);
                // handle errors here
            });

        reset();
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
    let rendered = (
        <Box component='form' onSubmit={handleSubmit} noValidate>
            <TextField margin="normal" fullWidth id="id" label="ID" name="id" autoFocus onChange={(event) => setId(event.target.value)} />
            {form}
            <Button
                type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                Buscar
            </Button>
        </Box>
    );

    return (
        <div>
            {show == false && rendered}
            {show == true && (
                <React.Fragment>
                    <CustomCard
                        id={id}
                        nombre={nombre}
                        director={director}
                        protagonista={protagonista}
                        productor={productor}
                        plataforma={plataforma}
                        fechaLanzamiento={fechaLanzamiento}
                        apellido={apellido}
                        email={email}
                        telefono={telefono}
                        direccion={direccion}
                        cliente_id={id_cliente}
                        juego_id={id_juego}
                        fecha_alquiler={fecha_alquiler}
                        fecha_devolucion={fecha_devolucion}
                        precio={precio}
                        cardType={tabOption}
                    />
                </React.Fragment>
            )}
        </div>
    );
}