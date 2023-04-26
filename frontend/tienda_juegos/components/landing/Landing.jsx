"use client";
import React, { useState } from "react";
import CustomTab from "../tab/CustomTab";
import CardGrid from "../cardGrid/CardGrid";
import styles from "./Landing.module.css"

export default function Landing() {
  const [selectedTab, setSelectedTab] = useState("tab1");

  const handleTabChange = (event, newTab) => {
    setSelectedTab(newTab);
  };

  const cardArray1 = [
    {id: 1,name: 'Paul',lastName: 'Martinez',email: 'paul@mail.com'},
    {id: 1,name: 'Paul',lastName: 'Martinez',email: 'paul@mail.com'},
    {id: 1,name: 'Paul',lastName: 'Martinez',email: 'paul@mail.com'},
    {id: 1,name: 'Paul',lastName: 'Martinez',email: 'paul@mail.com'},
    {id: 1,name: 'Paul',lastName: 'Martinez',email: 'paul@mail.com'},
    {id: 1,name: 'Paul',lastName: 'Martinez',email: 'paul@mail.com'}
    ];
  const cardArray2 = [
    {id: 2,name: 'Fiona',lastName: 'Martinez',email: 'fiona@mail.com'},
    {id: 2,name: 'Fiona',lastName: 'Martinez',email: 'fiona@mail.com'},
    {id: 2,name: 'Fiona',lastName: 'Martinez',email: 'fiona@mail.com'},
    {id: 2,name: 'Fiona',lastName: 'Martinez',email: 'fiona@mail.com'},
    {id: 2,name: 'Fiona',lastName: 'Martinez',email: 'fiona@mail.com'},
    {id: 2,name: 'Fiona',lastName: 'Martinez',email: 'fiona@mail.com'}
    ];

  return (
    <div>
        <div className={styles.tabs}>
            <CustomTab />
        </div>
        <p>jfdjfjdhfjdhf</p>
      {selectedTab === "tab1" ? <CardGrid propsArray={cardArray1} /> : <CardGrid propsArray={cardArray2} />}
    </div>
  );
}
