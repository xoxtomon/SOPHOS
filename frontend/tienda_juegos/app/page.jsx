"use client";
import styles from './page.module.css';
import React, { useState } from 'react';
import '../public/global.css';
import CardGrid from '@/components/cardGrid/CardGrid';
import CustomTab from '@/components/tab/CustomTab';
import FloatingButton from '@/components/floatingButton/FloatingButton';

export default function Home() {
    const Clients = [
        { id: 1, nombre: 'Paul', apellido: 'Martinez', email: 'paul@mail.com', telefono: '3012345532', direccion: 'direccion fake' },
        { id: 1, nombre: 'Paul', apellido: 'Martinez', email: 'paul@mail.com', telefono: '3012345532', direccion: 'direccion fake' },
        { id: 1, nombre: 'Paul', apellido: 'Martinez', email: 'paul@mail.com', telefono: '3012345532', direccion: 'direccion fake' },
        { id: 1, nombre: 'Paul', apellido: 'Martinez', email: 'paul@mail.com', telefono: '3012345532', direccion: 'direccion fake' },
        { id: 1, nombre: 'Paul', apellido: 'Martinez', email: 'paul@mail.com', telefono: '3012345532', direccion: 'direccion fake' },
        { id: 1, nombre: 'Paul', apellido: 'Martinez', email: 'paul@mail.com', telefono: '3012345532', direccion: 'direccion fake' },
        { id: 1, nombre: 'Paul', apellido: 'Martinez', email: 'paul@mail.com', telefono: '3012345532', direccion: 'direccion fake' },
        { id: 1, nombre: 'Paul', apellido: 'Martinez', email: 'paul@mail.com', telefono: '3012345532', direccion: 'direccion fake' }
    ];
    const Games = [
        { id: 2, nombre: 'GTA-V', director: 'Leslie', protagonista: 'Trevor Philipps', productor: 'Rockstar', plataforma: 'Multi', fechaLanzamiento: '17-09-2013' },
        { id: 3, nombre: 'The Last of Us', director: 'Neil Druckmann', protagonista: 'Joel and Ellie', productor: 'Naughty Dog', plataforma: 'PlayStation', fechaLanzamiento: '14-06-2013' },
        { id: 4, nombre: 'Minecraft', director: 'Markus Persson', protagonista: 'Steve', productor: 'Mojang', plataforma: 'Multi', fechaLanzamiento: '18-11-2011' },
        { id: 5, nombre: 'Red Dead Redemption 2', director: 'Rod Edge', protagonista: 'Arthur Morgan', productor: 'Rockstar', plataforma: 'Multi', fechaLanzamiento: '26-10-2018' },
        { id: 6, nombre: 'Assassins Creed Odyssey', director: 'Jonathan Dumont', protagonista: 'Kassandra', productor: 'Ubisoft', plataforma: 'Multi', fechaLanzamiento: '05-10-2018' },
        { id: 7, nombre: 'The Witcher 3: Wild Hunt', director: 'Konrad Tomaszkiewicz', protagonista: 'Geralt of Rivia', productor: 'CD Projekt Red', plataforma: 'Multi', fechaLanzamiento: '19-05-2015' }
    ];
    const Prices = [
        { id: 1, juego_id: 1, precio: 50000 },
        { id: 2, juego_id: 2, precio: 75000 },
        { id: 3, juego_id: 3, precio: 50000 },
        { id: 4, juego_id: 4, precio: 75000 },
        { id: 5, juego_id: 5, precio: 50000 },
        { id: 6, juego_id: 6, precio: 75000 }
    ];
    const Rents = [
        { id: 1, cliente_id: 1, juego_id: 1, fecha_alquiler: '2023', fecha_devolucion: 'N/A' },
        { id: 2, cliente_id: 2, juego_id: 2, fecha_alquiler: '2023', fecha_devolucion: 'N/A' },
        { id: 3, cliente_id: 3, juego_id: 3, fecha_alquiler: '2023', fecha_devolucion: 'N/A' },
        { id: 4, cliente_id: 4, juego_id: 4, fecha_alquiler: '2023', fecha_devolucion: 'N/A' },
        { id: 5, cliente_id: 5, juego_id: 5, fecha_alquiler: '2023', fecha_devolucion: 'N/A' },
        { id: 6, cliente_id: 6, juego_id: 6, fecha_alquiler: '2023', fecha_devolucion: 'N/A' },
    ];

    const [tabOption, setTabOption] = useState(0);
    const onChangeTab = (identifier) => {
        setTabOption(identifier);
    }

    let cardGrid;
    let floatingButton;
    if (tabOption == 0) {
        cardGrid = (
            <CardGrid propsArray={Clients} cardType={0} />
        );
        //floatingButton = (<FloatingButton modalType={0}/>);
    } else if (tabOption == 1) {
        cardGrid = (
            <CardGrid propsArray={Games} cardType={1} />
        );
    } else if (tabOption == 2) {
        cardGrid = (
            <CardGrid propsArray={Rents} cardType={2} />
        );
    } else if (tabOption == 3) {
        cardGrid = (
            <CardGrid propsArray={Prices} cardType={3} />
        );
    }

    return (
        <div className={styles.App}>
            <div className={styles.AppHeader}>
                <h1>GameBuster</h1>
                <CustomTab callBack={onChangeTab} />
                <p>This is a basic landing page created with Next.js</p>
                {cardGrid}
                <FloatingButton modalType={tabOption} />
            </div>
        </div>
    )
}