"use client";
import styles from './page.module.css';
import React, { useState, useEffect } from 'react';
import '../public/global.css';
import CardGrid from '@/components/cardGrid/CardGrid';
import CustomTab from '@/components/tab/CustomTab';
import FloatingButton from '@/components/floatingButton/FloatingButton';

export default function Home() {
    const [clients, setClients] = useState([]);
    const [games, setGames] = useState([]);
    const [rent, setRent] = useState([]);
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        async function fetchClients() {
            try {
                const res = await fetch('http://localhost:8080/api/v1/cliente', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    }
                }
                );
                const data = await res.json();
                setClients(data);
            } catch (error) {
                console.error(error);
            }
        }

        async function fetchGames() {
            try {
                const res = await fetch('http://localhost:8080/api/v1/juego', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    }
                }
                );
                const games = await res.json();
                setGames(games);
            } catch (error) {
                console.error(error);
            }
        }

        async function fetchRents() {
            try {
                const res = await fetch('http://localhost:8080/api/v1/alquiler', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    }
                }
                );
                const rent = await res.json();
                setRent(rent);
            } catch (error) {
                console.error(error);
            }
        }

        async function fetchPrices() {
            try {
                const res = await fetch('http://localhost:8080/api/v1/precio', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    }
                }
                );
                const prices = await res.json();
                setPrices(prices);
            } catch (error) {
                console.error(error);
            }
        }

        fetchPrices();
        fetchGames();
        fetchRents();
        fetchClients();
    }, []);

    const [tabOption, setTabOption] = useState(0);
    const onChangeTab = (identifier) => {
        setTabOption(identifier);
    }

    return (
        <div className={styles.App}>
            <div className={styles.AppHeader}>
                <h1>GameBuster</h1>
                <CustomTab callBack={onChangeTab} />
                <p>This is a basic landing page created with Next.js</p>
                {tabOption === 0 && <CardGrid propsArray={clients} cardType={0} />}
                {tabOption === 1 && <CardGrid propsArray={games} cardType={1} />}
                {tabOption === 2 && <CardGrid propsArray={rent} cardType={2} />}
                {tabOption === 3 && <CardGrid propsArray={prices} cardType={3} />}
                <FloatingButton modalType={tabOption} />
            </div>
        </div>
    )
}