"use client";
import styles from './page.module.css';
import React, { useState } from 'react';
import '../public/global.css';
import CustomCard from '@/components/card/CustomCard';
import CardGrid from '@/components/cardGrid/CardGrid';
import CustomTab from '@/components/tab/CustomTab';
import Landing from '@/components/landing/Landing';

export default function Home() {
    const cardArray = [
        {
            id: 1,
            name: 'Paul',
            lastName: 'Martinez',
            email: 'paul@mail.com',
        },
        {
            id: 1,
            name: 'Paul',
            lastName: 'Martinez',
            email: 'paul@mail.com',
        },
        {
            id: 1,
            name: 'Paul',
            lastName: 'Martinez',
            email: 'paul@mail.com',
        },
        {
            id: 1,
            name: 'Paul',
            lastName: 'Martinez',
            email: 'paul@mail.com',
        },
        {
            id: 1,
            name: 'Paul',
            lastName: 'Martinez',
            email: 'paul@mail.com',
        },
        {
            id: 1,
            name: 'Paul',
            lastName: 'Martinez',
            email: 'paul@mail.com',
        }
    ];

    //<button className={styles.btn}>Learn More</button>
    //<Landing />
    return (
        <div className={styles.App}>
            <div className={styles.AppHeader}>
                <Landing />
                <h1>GameBuster</h1>
                <CustomTab />
                <p>This is a basic landing page created with Next.js</p>
                <CardGrid propsArray={cardArray} />
            </div>
        </div>
    )
}