import { Box, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Add(props) {
    const router = useRouter();
    const endpoints = {
        0: 'http://localhost:8080/api/v1/cliente/add',
        1: 'http://localhost:8080/api/v1/juego/add',
        2: 'http://localhost:8080/api/v1/alquiler/add',
        3: 'http://localhost:8080/api/v1/precio/add'
    };

    const [formData, setFormData] = useState({});
    let tabOption = props.tabOption;

    const handleSubmit = (event) => {
        event.preventDefault();
        let parsedFormData;
        if (tabOption === 0) {
            parsedFormData = formData;
        };
        if (tabOption === 1) {
            const tmp_date = new Date(formData.lanzamiento);
            tmp_date.setDate(tmp_date.getDate() + 1);
            parsedFormData = {
                ...formData,
                fecha_lanzamiento: tmp_date,
            };
        };
        if (tabOption === 2) {
            const tmp_date = new Date(formData.fecha_alquiler);
            tmp_date.setDate(tmp_date.getDate() + 1);
            parsedFormData = {
                ...formData,
                cliente_id: parseInt(formData.id_cliente),
                juego_id: parseInt(formData.id_juego),
                fecha_alquiler: tmp_date.toISOString(),
            };
            console.log(parsedFormData);
        };
        if (tabOption === 3) {
            parsedFormData = {
                ...formData,
                precio: parseInt(formData.precio),
                juego_id: parseInt(formData.id_juego)
            };
            console.log(parsedFormData);
        };
        const apiUrl = endpoints[tabOption];
        fetch(apiUrl, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            method: "POST",
            body: JSON.stringify(parsedFormData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Data: ", data);
                // do something with the response data
            })
            .catch((error) => {
                console.error("Error: ", error);
                // handle errors here
            });

        // Go Back to Main
        location.reload();
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    }

    let form;
    if (tabOption == 0) {
        // Cliente
        form = (
            <div>
                <TextField margin="normal" required fullWidth id="nombre" label="Nombre" name="nombre" onChange={handleInputChange} autoFocus />
                <TextField margin="normal" required fullWidth id="apellido" label="Apellido" name="apellido" onChange={handleInputChange} autoFocus />
                <TextField margin="normal" required fullWidth id="email" label="Email" name="email" type="email" onChange={handleInputChange} autoFocus />
                <TextField margin="normal" required fullWidth id="telefono" label="Telefono" name="telefono" onChange={handleInputChange} autoFocus />
                <TextField margin="normal" required fullWidth id="direccion" label="Direccion" name="direccion" onChange={handleInputChange} autoFocus />
            </div>
        );
    } else if (tabOption == 1) {
        // Juego
        form = (
            <div>
                <TextField margin="normal" required fullWidth id="nombre" label="Nombre" name="nombre" onChange={handleInputChange} autoFocus />
                <TextField margin="normal" required fullWidth id="director" label="Director" name="director" onChange={handleInputChange} autoFocus />
                <TextField margin="normal" required fullWidth id="protagonista" label="Protagonista" name="protagonista" onChange={handleInputChange} autoFocus />
                <TextField margin="normal" required fullWidth id="productor" label="Productor" name="productor" onChange={handleInputChange} autoFocus />
                <TextField margin="normal" required fullWidth id="plataforma" label="Plataforma" name="plataforma" onChange={handleInputChange} autoFocus />
                <TextField margin="normal" required fullWidth id="lanzamiento" helperText="Lanzamiento" name="lanzamiento" type="date" onChange={handleInputChange} autoFocus shrink />
            </div>
        );
    } else if (tabOption == 2) {
        // Alquiler
        form = (
            <div>
                <TextField margin="normal" required fullWidth id="id_cliente" label="ID Cliente" name="id_cliente" onChange={handleInputChange} autoFocus />
                <TextField margin="normal" required fullWidth id="id_juego" label="ID Juego" name="id_juego" onChange={handleInputChange} autoFocus />
                <TextField margin="normal" required fullWidth id="fecha_alquiler" helperText="Fecha alquiler" name="fecha_alquiler" type="date" onChange={handleInputChange} autoFocus shrink />
            </div>
        );
    } else if (tabOption == 3) {
        // Precio
        form = (
            <div>
                <TextField margin="normal" required fullWidth id="id_juego" label="ID Juego" name="id_juego" onChange={handleInputChange} autoFocus />
                <TextField margin="normal" required fullWidth id="precio" label="Precio" name="precio" type="number" onChange={handleInputChange} autoFocus />
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