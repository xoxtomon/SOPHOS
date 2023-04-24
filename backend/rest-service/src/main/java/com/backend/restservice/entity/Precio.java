package com.backend.restservice.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "precio")
public class Precio {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "juego_id")
    private int juego_id;

    @Column(name = "precio")
    private int precio;

    public Precio() {
    }

    public Precio(int juego_id, int precio) {
        this.juego_id = juego_id;
        this.precio = precio;
    }

    public int getId() {
        return id;
    }

    public int getJuego_id() {
        return juego_id;
    }

    public void setJuego_id(int juego_id) {
        this.juego_id = juego_id;
    }

    public int getPrecio() {
        return precio;
    }

    public void setPrecio(int precio) {
        this.precio = precio;
    }

}
